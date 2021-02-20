---
slug: channelsInEcmaScript
title: Каналы в JS - это когда "тебе" не только кнопочки "рисовать"
author: Timofey Aksenov
author_title: Front End Developer
author_url: https://github.com/taksenov
author_image_url: https://avatars3.githubusercontent.com/u/4538701?s=400&v=4
tags:
  [
    lodash,
    go,
    golang,
    programming,
    redux-saga,
    channel,
    javascript,
    typescript,
    either monad,
    functional programming,
    contracts,
    contracts programming,
  ]
---

Работал я как-то свою работу на работе: "рисовал кнопочки на реакте" и вдруг бах! Тимлид мне говорит:

> Тимофейчик, нам нужно срочно в проект закатить поддержку web sockets с возможностью одновременного подключения нескольких разных web socket серверов и с возможностью подключаться к множеству различных каналов внутри web socket сервера, а так же нужно как-то активными каналами управлять, gracefull stopping им, независимо друг от друга, делать и следить за их количеством и т.д. и т.п. И да, вот мы тут развернули сервак на технологии centrifuge. Сделай красиво, в общем.

Делать нечего, нужно сделать.

Когда я учился на курсах по `Golang`, а да если вы не в курсе, то я прошел курсы на степике и успешно их сдал на максимальный балл.

[Разработка веб-сервисов на Go - основы языка / Результат 100%](https://stepik.org/cert/288192)

[Разработка веб-сервисов на Golang, часть 2 / Результат 100%](https://stepik.org/cert/371396)

В общем на этих курсах изучая, как работают горутины и пишутся микросервисы, я узнал про каналы, успешно реализовал их в ДЗ и запомнил, что каналы вещь нужная и полезная.

И вот в процессе первоначального мозгового штурма, я вспомнил, что в документации к `redux-saga` читал про `eventChannels` и там был пример создания канала для web sockets на основе `socket.io client`. О да, если бы не курсы по гошечке, то я бы эту часть документации пропустил и пошел дальше экшенами в стор пуляться... ой "рисовать кнопочки на реакте" конечно же.

Изучив пример из документации `redux-saga`, я понял, что `eventChannels` это то что мне нужно. Но нужно доработать свой код, чтобы учесть технологические требования:

1. Подключение к различным физическим серверам web sockets (оборачивание каждого в отдельный канал)
1. Подключение к различным каналам внутри одного физического сервера web sockets (оборачивание каждого в отдельный канал)
1. Независимый запуск каналов
1. Независимая остановка каналов
1. Возможность провести инвентаризацию активных каналов

**Реализация задуманного:**

В файле `chanSaga.ts` я создал 5 функций, которые обладают следущей функциональностью:

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

    // NB: Обратите внимание на строку кода `outerCallback({ message, emit });` будет бонус
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

**Практическая реализация задуманного:**

После того, как я реализовал всю необходимую инфраструктуру в файле `chanSaga.ts`, теперь я могу в любом месте системы делать вот так:

```ts
// Выберем нужный сокет канал
const scktSelector: any = yield select(socketSelector);

// Прервем его, если он вдруг остался запущен,
yield call(terminateSocketChan, SUPPORT_MESSAGES_CHAN);

yield put({
  type: socketSaveSocket.toString(),
  payload: {},
});

// Создадим сокет
const socket = yield call(createSocketConnection, data);

// Создадим канал для сокета
// NB: Обратите внимание на строку кода `outerCallback: chatListSupportSocketCallback,` будет бонус
const channel = yield call(createSocketChannel, {
  data,
  socket,
  outerCallback: chatListSupportSocketCallback,
});

yield put({
  type: socketSaveSocket.toString(),
  payload: {
    ...scktSelector,
    [SUPPORT_MESSAGES_CHAN]: socket,
  },
});

// Запустим вотчер, принимающий сообщения в канал от внешнего web socket сервера
yield call(watchSocketChan, channel);
```

Код выше, может быть многократно продублирован, что позволит реализовать все поставленные нам функциональные требования.

**Бонус про зубодробительный пример с замыканием:**

```ts
/**
 * Коллбек, который помещается в event канал с сокетами,
 * где при событии от сокет сервера `publish`
 * "вытягивает" emit (эмиттер) в замыкание.
 * Эмиттер (emit) это аргумент коллбека из функции `eventChannel` пакета redux-saga:
 *
 * `eventChannel((emit: any) => {...}`
 *
 * Эмиттер нужен, чтобы потом "дернуть" экшен и передать в его `payload`
 * данные полученные от сокет сервера
 *
 * @param {IParams} params
 * @param message any;
 * @param emit (input: any) => void;
 */
export const socketCallback = (params: IParams) => {
  const { message } = params;
  const { data } = message;

  checkContract({
    contract: soketServerMsgContract,
    data,
    direction: DIRECTION.B_F,
  });

  params.emit({
    type: socketSupportClearBeforeRes.toString(),
  });

  params.emit({
    type: chatListSupportResMsgFromSocket.toString(),
    payload: data,
  });
};
```

**Котики любят каналы, все любят каналы** 🐱
