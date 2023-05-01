const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItemsHtml = ingredients.map((ingredients) => {
    const li = document.createElement("li");
    li.textContent = ingredients;
    li.classList.add("item");
    return li.outerHTML
});

ingredientsList.insertAdjacentHTML('beforeend', listItemsHtml.join(''));
