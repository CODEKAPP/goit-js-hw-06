let counterValue = 0;

const counter = document.getElementById("value");

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener("click", () => {
    counterValue--;
    counter.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
    counterValue++;
    counter.textContent = counterValue;
});
