const inputEL = document.querySelector("input");

const dataLength = inputEL.getAttribute("data-length");
console.log(dataLength);

inputEL.addEventListener(`blur`, (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length == dataLength) {
    inputEL.classList.add("valid");
    inputEL.classList.remove("invalid");
  } else {
    inputEL.classList.add("invalid");
    inputEL.classList.remove("valid");
  }
});
