function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEL = document.querySelector("button[data-create]");
const destroyBtnEL = document.querySelector("button[data-destroy]");
const divControlsEl = document.querySelector("#controls");
const divBoxesEl = document.querySelector("#boxes");

createBtnEL.addEventListener("click", createBoxes);
destroyBtnEL.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = divControlsEl.firstElementChild.value;
  const squares = [];

  let defaultHeight = 30;
  let defaultWidth = 30;

  for (let i = 0; i < amount; i += 1) {
    divBoxesEl.style.display = "flex";
    divBoxesEl.style.flexWrap = "wrap";
    divBoxesEl.style.gap = "20px";
    const square = document.createElement("div");
    square.style.height = `${defaultHeight}px`;
    square.style.width = `${defaultWidth}px`;
    defaultHeight += 10;
    defaultWidth += 10;
    square.style.background = getRandomHexColor();
    squares.push(square);
  }

  divBoxesEl.append(...squares);
  console.log(divBoxesEl);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}

console.log(divBoxesEl);
