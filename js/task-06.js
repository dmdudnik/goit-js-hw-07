const inputEl = document.querySelector("#validation-input");
const dataValue = inputEl.getAttribute("data-length");
console.log(dataValue);
inputEl.addEventListener("input", onInputValidation);

function onInputValidation(event) {
  if (event.currentTarget.value.length === 6) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
