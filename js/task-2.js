//В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

/*Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
    после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM - узлов используй document.createElement().*/

const ulRef = document.createElement("ul");
ulRef.id = 'ingredients';
const liRefs = ingredients.map((text) => {
  const liRef = document.createElement("li");
  liRef.textContent = text;
  return liRef;
});

ulRef.append(...liRefs);

document.body.appendChild(ulRef);
