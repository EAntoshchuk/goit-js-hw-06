let counterValue = 0;
let step = 1;

const counterEL = document.querySelector("#counter");
const valueEL = document.querySelector("#value");

function handleDecrementButtonEL() {
  counterValue -= step;
  valueEL.textContent = counterValue;
  console.log("Click on the decrement button");
}

function handleIncrementButtonEL() {
  counterValue += step;
  valueEL.textContent = counterValue;
  console.log("Click on the increment button");
}

counterEL.firstElementChild.addEventListener("click", handleDecrementButtonEL);
counterEL.lastElementChild.addEventListener("click", handleIncrementButtonEL);
