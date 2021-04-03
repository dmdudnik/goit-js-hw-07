const title = document.querySelectorAll("h2");
const sumItems = document.querySelectorAll(".item");
console.log(`В списке ${sumItems.length} категории`);
console.log(`Категория: ${title[0].textContent}`);
console.log(
  `Количество элементов: ${sumItems[0].lastElementChild.children.length}`
);
console.log(`Категория: ${title[1].textContent}`);
console.log(
  `Количество элементов: ${sumItems[1].lastElementChild.children.length}`
);
console.log(`Категория: ${title[2].textContent}`);
console.log(
  `Количество элементов: ${sumItems[2].lastElementChild.children.length}`
);
