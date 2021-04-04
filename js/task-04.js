const action = document.querySelectorAll("#counter button");
const btnDecr = action[0];
const btnIncr = action[1];
const input = document.querySelector("#value");
let counterValue = 0;

btnDecr.addEventListener("click", decrement);

function decrement() {
  input.textContent = counterValue -= 1;
}

btnIncr.addEventListener("click", increment);

function increment() {
  input.textContent = counterValue += 1;
}
