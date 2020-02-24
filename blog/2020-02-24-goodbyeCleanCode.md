---
id: goodbyeCleanCode
title: Прощай чистый код!
author: Timofey Aksenov
author_title: Front End Developer
author_url: https://github.com/taksenov
author_image_url: https://avatars3.githubusercontent.com/u/4538701?s=400&v=4
tags: [DRY, Dan Abramov, programming, нарушители, у некоторых джунов бомбанет]
---

Ден Абрамов в своем блоге опубликовал крайне интересную [статью](https://overreacted.io/goodbye-clean-code/) о том, когда и почему мы нарушали, нарушаем и будем нарушать принцип DRY.

**Код для привлечения внимания**

```js
let {top, bottom, left, right} = Directions;

function createHandle(directions) {
  // 20 lines of code
}

let fourCorners = [
  createHandle([top, left]),
  createHandle([top, right]),
  createHandle([bottom, left]),
  createHandle([bottom, right]),
];
let fourSides = [
  createHandle([top]),
  createHandle([left]),
  createHandle([right]),
  createHandle([bottom]),
];
let twoSides = [
  createHandle([left]),
  createHandle([right]),
];

function createBox(shape, handles) {
  // 20 lines of code
}

let Rectangle = createBox(Shapes.Rectangle, fourCorners);
let Oval = createBox(Shapes.Oval, fourSides);
let Header = createBox(Shapes.Rectangle, twoSides);
let TextBox = createBox(Shapes.Rectangle, fourCorners);
```
