document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("name-input");
    const output = document.getElementById("name-output");

    input.addEventListener("input", function () {
        const inputValue = input.value;
        if (inputValue === "") {
            output.textContent = "Anónimo";
        } else {
            output.textContent = inputValue;
        }
    });
});
