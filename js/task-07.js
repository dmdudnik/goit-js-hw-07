const rangeEl = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

rangeEl.addEventListener("input", textSizeControl);

function textSizeControl() {
  textValue.style.fontSize = rangeEl.value + "px";
}
