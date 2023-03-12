const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItemEL = ingredients.map((element) => {
  const ingredientsEL = document.createElement("li");
  ingredientsEL.classList.add("item");
  ingredientsEL.textContent = element;
  console.log(ingredientsEL);
  return ingredientsEL;
});

ingredientsList.prepend(...listItemEL);
