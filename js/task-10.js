const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
    let boxesHTML = "";
    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        const boxHTML = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
        boxesHTML += boxHTML;
    }
    boxesContainer.insertAdjacentHTML("beforeend", boxesHTML);
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
    input.value = 0;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

createBtn.addEventListener("click", () => {
    createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
