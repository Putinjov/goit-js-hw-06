const inputText = document.querySelector('#validation-input');

inputText.addEventListener("blur", () => {
    inputText.classList.toggle("valid", inputText.value.length >= 6);
    inputText.classList.toggle("invalid", inputText.value.length < 6)
});