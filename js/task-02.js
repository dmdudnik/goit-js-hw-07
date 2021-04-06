const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingridientList = document.querySelector("ul");
const addIngridients = ingredients.map((ingridient) => {
  const ingridientItem = document.createElement("li");
  ingridientItem.textContent = ingridient;

  return ingridientItem;
});
ingridientList.append(...addIngridients);
//console.log(ingridientList);
