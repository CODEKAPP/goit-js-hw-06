document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("validation-input");
    const dataLength = parseInt(input.getAttribute("data-length"));

    input.addEventListener("blur", function () {
        const inputValue = input.value;
        if (inputValue.length === dataLength) {
            input.classList.add("valid");
            input.classList.remove("invalid");
        } else {
            input.classList.add("invalid");
            input.classList.remove("valid");
        }
    });
});
