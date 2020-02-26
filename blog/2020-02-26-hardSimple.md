---
id: hardSimple
title: Не простой выбор для простого решения
author: Timofey Aksenov
author_title: Front End Developer
author_url: https://github.com/taksenov
author_image_url: https://avatars3.githubusercontent.com/u/4538701?s=400&v=4
tags: [algorithms, Εὐκλείδης, programming, страх и ненависть джуниор разработчика, код не является документацией]
---

Изучаю постепенно основы-основы в информатике. И сразу же натыкаюсь на **Алгоритм Евклида** [wiki](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%95%D0%B2%D0%BA%D0%BB%D0%B8%D0%B4%D0%B0).

Т.к. считаю себя человеком любопытным, то защел в [дистрибутив господина Трехлеба](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm), чтобы посмотреть, как же выглядит указанный выше алгоритм на JavaScript. 

Результат коллективной работы меня в какой-то степени восхитил, озадачил и одновременно принес сладкое чувство удовлетворения от того, что я понимаю суть происходящего. 

А теперь к сути, вернее к коду

**Вариант 1. Код первоначальной версии:**

```js
/**
 * @param {number} a
 * @param {number} b
 * @return {number|null}
 */
export default function euclideanAlgorithm(a, b) {
  if (a === 0 && b === 0) {
    return null;
  }

  if (a === 0 && b !== 0) {
    return b;
  }

  if (a !== 0 && b === 0) {
    return a;
  }

  if (a > b) {
    return euclideanAlgorithm(a - b, b);
  }

  return euclideanAlgorithm(b - a, a);
}
```

**Вариант 2. Код итоговой версии:**

```js
/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  // Make input numbers positive.
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation.
  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}
```

**Вариант 3. Еще раз код итогой версии без лишних комментариев**

```js
/**
 * Recursive version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}
```

Вроде бы великолепный результат, вместо 15 строк кода, мы получаем 5 строк. Но с уменьшением количества строк мы увеличиваем сложность.

Первый вариант кода можно читать без предварительной математической подготовки (имеется в виду, что хватит беглого просмотра статьи из википедии). Второй вариант, потребует вдумчивого чтения комментариев и соответсвующей более детальной математическуой подготовки. С третьим вариантом, как говорится "без пол литра не разобраться".

:::caution
А теперь внимание. Личное, ни на что не претендующее, мнение автора.
:::

Разработчик (абсолютно любого уровня), должен понимать свою ответсвенность перед другими разработчиками, коллегами, бизнесом и многими, многими, многими... Оставив вариант №3, вы нанесете удар всем остальным людям. Будте готовы, что вас будут ненавидеть и вспоминать плохими словами, после того как вы наиграетесь и пойдете писать сложные вещи, туда где вас понимают или сыграет свою роль BUS_FACTOR `*irony`.

Выход из проблемы это варианты №1 и №2, т.к. они дают бизнесу уверенность, что за обозримое время недорогие разработчики разберутся в вашем коде. А разработчикам сопроводжающим код не прийдется уходить в запой от чувства собственной ничтожности. 

**Возлюбите ближнего своего — пишите код не для себя, а для людей!**