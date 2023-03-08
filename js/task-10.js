function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEL = document.querySelector(`button[data-create]`);
const destroyBtnEL = document.querySelector(`button[data-destroy]`);
const divBoxesEl = document.querySelector(`#boxes`);
const divControslEl = document.querySelector(`#controls`);

createBtnEL.addEventListener(`click`, createBoxes);
destroyBtnEL.addEventListener(`click`, destroyBoxes);

function createBoxes() {
  const qauntity = divControslEl.firstElementChild.value;
  const squares = [];

  let basicHeight = `30`;
  let basicWidth = `30`;

  for (let i = 0; i < qauntity; i += 1) {
    const square = document.createElement(`div`);
    square.style.height = `${basicHeight}px`;
    square.style.width = `${basicWidth}px`;
    basicHeight += 10;
    basicWidth += 10;
    square.style.backgroundColor = `${getRandomHexColor}`;
    squares.push(square);
  }
  divBoxesEl.append(...squares);
  console.log(divBoxesEl);
}

console.log(divBoxesEl);
