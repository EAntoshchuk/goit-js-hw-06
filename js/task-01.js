const itemsEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemsEl.length);

// const titleEL = document.querySelector("h2");

const titleEL = document.querySelector("h2");
console.log("Category:", titleEL.textContent);
const firstEl = categories.firstElementChild;
const lastEL = firstEl.lastElementChild;
console.log("Elements:", lastEL.children.length);

const middleEL = categories.firstElementChild.nextElementSibling;
const middleLiEl = middleEL.firstElementChild;
console.log("Category:", middleLiEl.textContent);
const middleUlEL = middleEL.lastElementChild;
console.log("Elements:", middleUlEL.children.length);

const lastLiEL = categories.lastElementChild;
const lastTitleEl = lastLiEL.firstElementChild;
console.log("Category:", lastTitleEl.textContent);
const lastUlEl = lastLiEL.lastElementChild;
console.log("Elements:", lastUlEl.children.length);
