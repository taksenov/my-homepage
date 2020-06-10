---
id: whenFPIsAwesome
title: Когда функциональное программирование это хорошо, правильно и нужно
author: Timofey Aksenov
author_title: Front End Developer
author_url: https://github.com/taksenov
author_image_url: https://avatars3.githubusercontent.com/u/4538701?s=400&v=4
tags:
  [
    lodash,
    elixir,
    programming,
    FP,
    pipe,
    functiuonal programming,
    javascript,
    typescript,
  ]
---

Совсем недавно я закончил писать код очень большого модуля со складским учетом готовой продукции.

В процессе написания, мне очень хорошо запомнился один момент, а именно: установка бейджика со статусом для коробки, паллеты, партии с готовой продукцией. Один и тот же объект в бизнес-логике складского учета может иметь различные статусы, которые отображаются в таблице с итоговыми выборками. С бекенда я получал только статусы в виде строк `IN_PARTY` и номера этих самых партий, которые преобразовывал в человекочитаемый вид. Например: `В коробке`, `В партии`, `В партии: №2`, `В паллете`, `В паллете: №6`.

**Код первоначальной версии:**

```js
const {
  ...
  logisticStatus,
  partyNumber = -1,
} = item;
...
const statusForHuman = getLogisticStatus(logisticStatus);
const storeTwoPalletStatusNumber =
  logisticStatus === 'IN_PARTY' ? partyNumber : -1;
...
return (
...
    <Table.Cell>
      {statusForHuman}
      {storeTwoPalletStatusNumber !== -1
        ? `: №${storeTwoPalletStatusNumber}`
        : null}
    </Table.Cell>
...
)
```

Когда я прототипировал и готовил первоначальную версию кода, меня совершенно не смутила вот эта часть кода:

```js
<Table.Cell>
  {statusForHuman}
  {storeTwoPalletStatusNumber !== -1
    ? `: №${storeTwoPalletStatusNumber}`
    : null}
</Table.Cell>
```

Здесь логика размазывается по множеству мест JSX-разметки, где необходимо получить человекочитаемый статус.

Вдоволь настрадавшись с установкой статусов и хорошо усвоив для себя, что подобное _размазывание логики_ не ведет ни к чему хорошему, я поставил у себя в голове _пунктик_ о том, что мне необходимо решение данной проблемы.

И о чудо! Решение нашлось в самом неожиданном месте: на досуге я смотрел доклад по ЯП elixir и обратил внимание на оператор пайпа в данном языке `|>`. Это натолкнуло меня на мысль, что мне для решения моей проблемы с размазанной по шаблонам логикой поможет функциональное программирование.

Сказано, сделано. Я открыл [гайд по ФП в js](https://github.com/MostlyAdequate/mostly-adequate-guide-ru) , [Lodash FP Guide](https://github.com/lodash/lodash/wiki/FP-Guide) и быстро выяснил, что для решения моей проблемы подойдет lodash метод `_.flow([funcs])`, который по сути реализует пайп или выполнение функций _слева на право_

**Код итоговой версии:**

```js
...
const {
...
  logisticStatus,
  partyNumber = -1,
} = item;
// Один раз передаем данные на вход потоку функций
const statusForHuman = setPalletStatusForHuman(
  logisticStatus,
  partyNumber,
);
...

return (
...
    {/* Пользуемся удобными бейджиками во множестве мест компонента */}
    <Table.Cell>{statusForHuman}</Table.Cell>
    <Table.Cell>{statusForHuman}</Table.Cell>
    <Table.Cell>{statusForHuman}</Table.Cell>
...
)
```

**Код реализации хелперов, устанавливающих человекочитаемые статусы**

```js
import flow from 'lodash/flow';

/**
 * Интерфейс с описанием типов статуса
 *
 * @interface IStatus
 */
interface IStatus {
  logisticStatus: string;
  correctNumber?: number;
}

/**
 * Установка номера паллеты или номера партии для полного статуса
 *
 * @param {string} logisticStatus
 * @param {number} palletNumber
 * @param {number} partyNumber
 * @returns {object} {
 *   {string} logisticStatus,
 *   {number | undefined | -1} correctNumber,
 * }
 */
const storeTwoPackStatusNumber: (s: string, n: number, p: number) => IStatus = (
  logisticStatus: string,
  palletNumber: number,
  partyNumber: number,
) => {
  return logisticStatus === 'IN_PALLET'
    ? { logisticStatus, correctNumber: palletNumber }
    : { logisticStatus, correctNumber: partyNumber };
};

/**
 * Установка номера паллеты для полного статуса
 *
 * @param {string} logisticStatus
 * @param {number} partyNumber
 * @returns{object} {
 *   {string} logisticStatus,
 *   {number | undefined | -1} correctNumber,
 * }
 */
const storeTwoPalletStatusNumber: (s: string, p: number) => IStatus = (
  logisticStatus: string,
  partyNumber: number,
) => {
  return logisticStatus === 'IN_PARTY'
    ? { logisticStatus, correctNumber: partyNumber }
    : { logisticStatus, correctNumber: -1 };
};

/**
 * Преобразование кода статуса, полученного с бекенда в человекочитаемый статус
 *
 * @param {*} {
 *   logisticStatus,
 *   correctNumber,
 * }
 * @returns {object} {
 *   {string} logisticStatus,
 *   {number | undefined | -1} correctNumber,
 * }
 */
const getHumanLogisticStatus: (data: IStatus) => IStatus = ({
  logisticStatus,
  correctNumber,
}) => {
  let statusForHuman = logisticStatus;
  let temp = -1;
  if (correctNumber) {
    temp = correctNumber;
  }

  switch (logisticStatus) {
    case 'DISASSEMBLED':
      statusForHuman = 'Разобрано';
      break;
    case 'ASSEMBLED':
      statusForHuman = 'Собрано';
      break;
    case 'IN_PALLET':
      statusForHuman = 'В паллете';
      break;
    case 'IN_PARTY':
      statusForHuman = 'В партии';
      break;
    case 'SHIPPING':
      statusForHuman = 'Отгружено';
      break;
    default:
      statusForHuman = logisticStatus;
      break;
  }

  return { logisticStatus: statusForHuman, correctNumber: temp };
};

/**
 * Получение статуса в человекочитаемом формате, с указанием номера (при необходимости)
 *
 * @param {*} {
 *   logisticStatus,
 *   correctNumber,
 * }
 * @returns {string} statusForHuman
 */
const getLogisticStatus: (data: IStatus) => string = ({
  logisticStatus,
  correctNumber,
}) => {
  let statusForHuman = logisticStatus;

  switch (logisticStatus) {
    case 'В паллете':
      statusForHuman = `В паллете${
        correctNumber !== -1 ? `: №${correctNumber}` : ''
      }`;
      break;
    case 'В партии':
      statusForHuman = `В партии${
        correctNumber !== -1 ? `: №${correctNumber}` : ''
      }`;
      break;
    default:
      statusForHuman = logisticStatus;
      break;
  }

  return statusForHuman;
};

/**
 * Pipe для установки отформатированного статуса паллеты в компоненте
 *
 * @param {string} logisticStatus
 * @param {number} partyNumber
 *
 * @returns {string} statusForHuman
 */
export const setPalletStatusForHuman = flow([
  storeTwoPalletStatusNumber,
  getHumanLogisticStatus,
  getLogisticStatus,
]);

/**
 * Pipe для установки отформатированного статуса коробки в компоненте
 *
 * @param {string} logisticStatus
 * @param {number} palletNumber
 * @param {number} partyNumber
 *
 * @returns {string} statusForHuman
 */
export const setPackStatusForHuman = flow([
  storeTwoPackStatusNumber,
  getHumanLogisticStatus,
  getLogisticStatus,
]);

/**
 * Pipe для установки отформатированного статуса для общего случая в компоненте
 *
 * @param {*} {
 *   {string} logisticStatus - код статуса с бекенда,
 *   {number | undefined | -1} correctNumber - номер объекта,
 * }
 *
 * @returns {string} statusForHuman
 */
export const setCommonStatusForHuman = flow([
  getHumanLogisticStatus,
  getLogisticStatus,
]);
```

В результате, получен хорошо задокументированный, удобный для понимания, легко расширяемый код хелпера по установке человекочитаемых статусов для объектов с готовой продукцией.

**И программисты рады, и котики рады!** 🐱
