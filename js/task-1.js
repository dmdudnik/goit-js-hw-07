const categorySum = document.querySelector("ul").children.length;
console.log(`В списке ${categorySum} категории`);

const title = document.querySelectorAll("h2");
const elementSum = document.querySelectorAll(".item");
console.log(`Категория:  ${title[0].textContent}`);
console.log(
  `Количество элементов: ${elementSum[0].lastElementChild.children.length}`
);
console.log(`Категория:  ${title[1].textContent}`);
console.log(
  `Количество элементов: ${elementSum[1].lastElementChild.children.length}`
);
console.log(`Категория:  ${title[2].textContent}`);
console.log(
  `Количество элементов: ${elementSum[2].lastElementChild.children.length}`
);
