---
id: channelsInEcmaScript
title: Каналы в JS - это когда "тебе" не только кнопочки "рисовать"
author: Timofey Aksenov
author_title: Front End Developer
author_url: https://github.com/taksenov
author_image_url: https://avatars3.githubusercontent.com/u/4538701?s=400&v=4
tags: [go, golang, programming, redux-saga, channel, javascript, typescript]
---

:::note
This is WIP blog article
:::

Работал я как-то свою работу на работе: "рисовал кнопочки на реакте" и вдруг бах! Тимлид мне говорит:

> Тимофейчик, нам нужно срочно в проект закатить поддержку web sockets с возможностью одновременного подключения нескольких разных web socket серверов и с возможностью подключаться к множеству различных каналов внутри web socket сервера, а так же нужно как-то активными каналами управлять, gracefull stopping им, независимо друг от друга, делать и следить за их количеством и т.д. и т.п. И да, вот мы тут развернули сервак на технологии centrifuge. Сделай красиво, в общем.

Делать нечего, нужно сделать.

В процессе первоначального мозгового штурма, я вспомнил, что в документации к `redux-saga` читал про `eventChannels` и там был пример создания канала для web sockets на основе `socket.io client`. Изучив этот пример из документации, я понял, что это то что мне нужно. Но нужно доработать свой код, чтобы учесть технологические требования:

1. Возможность подключения к различным физическим серверам web sockets (оборачивание каждого в отдельный канал)
1. Возможность подключения к различным каналам внутри одного физического сервера web sockets (оборачивание каждого в отдельный канал)
1. Независимый запуск каналов
1. Независимая остановка каналов
1. Возможность провести инвентаризацию активных каналов

В процессе написания, мне очень хорошо запомнился один момент, а именно: установка бейджика со статусом для коробки, паллеты, партии с готовой продукцией. Один и тот же объект в бизнес-логике складского учета может иметь различные статусы, которые отображаются в таблице с итоговыми выборками. С бекенда я получал только статусы в виде строк `IN_PARTY` и номера этих самых партий, которые преобразовывал в человекочитаемый вид. Например: `В коробке`, `В партии`, `В партии: №2`, `В паллете`, `В паллете: №6`.

**Код первоначальной версии:**

```ts
/**
 * Создает канал событий для указанного подключения к сокет серверу
 *
 * @param {{ data: any; socket: any }} { data, socket }
 * @returns
 */
export function createSocketChannel({
  data,
  socket,
  outerCallback,
}: {
  data: any;
  socket: any;
  outerCallback: (params: any) => void;
}) {
  const { token, channel } = data;

  return eventChannel((emit: any) => {
    socket.setToken(token);

    const publishHandlerFunction = (message: any) => {
      outerCallback({ message, emit });
    };

    const subscribeErrorHandlerFunction = (errorEvent: any) => {
      emit(new Error(errorEvent.reason));
    };

    const subscription = socket.subscribe(channel);

    subscription.on('publish', publishHandlerFunction);
    subscription.on('error', subscribeErrorHandlerFunction);

    socket.connect();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    socket.on('disconnect', (_context: any) => {
      emit(END);
    });

    // unsubscribe
    return () => {
      socket.disconnect();
    };
  });
}
```

```ts
/**
 * Получает инициализационные данные о сокет сервере из АПИ,
 * для последующего создания соединения с сокет сервером
 *
 * @export
 * @param {IPayload} payload
 * @returns {(Generator<CallEffect<Promise<AxiosResponse<any>> | null>, IInitData, IRes>)}
 */
export function* initSocketConnection(
  payload: IPayload,
): Generator<CallEffect<Promise<AxiosResponse<any>> | null>, IInitData, IRes> {
  const { userToken: token, path } = payload;
  const socketInitData: IRes = yield call(socketAPI.postDataInitSocket, {
    token,
    path,
  });
  const { data } = socketInitData;
  const contractStatus = socketInitDataContract.decode(data);

  if (E.isLeft(contractStatus)) {
    console.log('Socket init: contract error, path:', path);
    return { status: InitStatusEnum.ERROR };
  }

  return { status: InitStatusEnum.SUCCESS, data };
}
```

```ts
/**
 * Создать подключение к сокет серверу.
 *
 * Клиент сокет сервера: Centrifuge
 *
 * @export
 * @param {IData} data
 * @returns
 */
export function createSocketConnection(data: IData) {
  const { socket } = data;
  const { proto, host, port } = socket;
  const suffix = environment.WEB_SOCKET_SUFFIX;
  const centrifuge = new Centrifuge(`${proto}${host}:${port}${suffix}`);

  return centrifuge;
}
```

```ts
/**
 * Отключиться от сокет сервера, а так же закрыть канал `eventChannel`
 *
 * @export
 * @param {string} socketChanName
 */
export function* terminateSocketChan(socketChanName: string) {
  const scktSelector = yield select(socketSelector);
  const centrifuge =
    get(scktSelector, `${socketChanName}`, 'NO_CHAN') || 'NO_CHAN';

  if (centrifuge === 'NO_CHAN') {
    return null;
  }

  centrifuge.disconnect();

  const tmpScktData = omit(scktSelector, `${socketChanName}`);

  yield put({
    type: socketSaveSocket.toString(),
    payload: {
      ...tmpScktData,
    },
  });
}
```

```ts
/**
 * Вотчер.
 *
 * Следит за каналом принимая сообщения от сокет сервера или команду останова.
 *
 * Прерывается через вызов функции terminateSocketChan из других саг:
 * `yield call(terminateSocketChan, `${channelName}`);`
 *
 * @export
 * @param {} chanName
 */
export function* watchSocketChan(chanName: any) {
  while (true) {
    try {
      const action = yield take(chanName);
      yield put(action);
      yield fork(terminateSocketChan, '');
    } catch (err) {
      console.log('socket error:', err);
      chanName.close();
    }
  }
}
```
