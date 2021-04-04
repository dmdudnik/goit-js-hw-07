const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingridientList = document.querySelector("ul");
const addIngridients = ingredients.forEach((ingridient) => {
  const ingridientItem = document.createElement("li");
  ingridientItem.textContent = ingridient;
  ingridientList.appendChild(ingridientItem);
});

//console.log(ingridientList);
