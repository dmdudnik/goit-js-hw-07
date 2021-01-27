/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

    Категория: Животные
    Количество элементов: 4
*/

const categorySum = document.querySelector("ul").children.length;
console.log(`В списке ${categorySum} категории`);

const title = document.querySelectorAll("h2");
const elementSum = document.querySelectorAll(".item");
console.log(`Категория: ${title[0].textContent}`);
console.log(
  `Количество элементов: ${elementSum[0].lastElementChild.children.length}`
);
console.log(`Категория: ${title[1].textContent}`);
console.log(
  `Количество элементов: ${elementSum[1].lastElementChild.children.length}`
);
console.log(`Категория: ${title[2].textContent}`);
console.log(
  `Количество элементов: ${elementSum[2].lastElementChild.children.length}`
);
