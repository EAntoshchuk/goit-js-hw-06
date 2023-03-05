const inputEL = document.querySelector(`#validation-input`);
console.log(inputEL);

const dataLength = inputEL.getAttribute("data-length");
console.log(dataLength);

inputEL.addEventListener(`blur`, (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === dataLength) {
    return inputEL.setAttribute("id", "validation-input.valid");
  } else if (event.target.value.length === 0) {
    return inputEL.setAttribute("id", "validation-input");
  }
  return inputEL.setAttribute("id", "validation-input.invalid");
});
