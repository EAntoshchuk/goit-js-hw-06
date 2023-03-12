function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colourEL = document.querySelector(".color");
const bodyEL = document.querySelector("body");
const btnEL = document.querySelector("button");

btnEL.addEventListener("click", () => {
  bodyEL.style.background = getRandomHexColor();
  colourEL.textContent = bodyEL.style.background;
});
