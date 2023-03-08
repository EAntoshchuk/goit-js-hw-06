const inputEL = document.querySelector("input");

const dataLength = inputEL.getAttribute("data-length");
console.log(dataLength);

inputEL.addEventListener(`blur`, (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === dataLength) {
    return inputEL.setAttribute("id", "#validation-input.valid");
  } else if (event.target.value.length === "") {
    return inputEL.setAttribute("id", "#validation-input");
  }
  return inputEL.setAttribute("id", "#validation-input.invalid");
});
