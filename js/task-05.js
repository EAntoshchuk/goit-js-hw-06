const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const inputText = (event) => {
  if (inputEl.value.trim() === "") {
    outputEl.textContent = `Anonymous`;
  } else outputEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener(`input`, inputText);
