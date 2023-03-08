const fontSizeControlEL = document.querySelector("#font-size-control");

const textEL = document.querySelector("#text");

textEL.style.fontSize = fontSizeControlEL.value + "px";
fontSizeControlEL.addEventListener("input", (event) => {
  textEL.style.fontSize = event.currentTarget.value + "px";
});
