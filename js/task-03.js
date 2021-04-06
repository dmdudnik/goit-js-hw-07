const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//const galleryList = document.querySelector("ul");
// const createGallery = images.forEach((image) => {
//   const imgSrc = image.url;
//   const imgAlt = image.alt;
//   const galleryListItem = document.createElement("li");
//   const imageItem = document.createElement("img");
//   imageItem.setAttribute("src", imgSrc);
//   imageItem.setAttribute("alt", imgAlt);
//   galleryListItem.appendChild(imageItem);
//   galleryList.appendChild(galleryListItem);
// });
// console.log(galleryList);

const galleryList = document.querySelector("#gallery");
const createGallery = images.map((image) => {
  return `<li><img src = ${image.url} alt = ${image.alt}></li>`;
});

galleryList.insertAdjacentHTML("afterbegin", createGallery);
