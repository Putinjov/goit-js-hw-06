const inputText = document.querySelector('#validation-input');

inputText.addEventListener("blur", () => {
    const result = inputText.value.length >= inputText.dataset.length;
    inputText.classList.toggle("valid", result);
    inputText.classList.toggle("invalid", !result)
    console.log(inputText.value.length)
});
