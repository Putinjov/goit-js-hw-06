const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};
refs.btnChangeColor.addEventListener('click', () => {
  const colorName = getRandomHexColor();
  document.body.style.backgroundColor = colorName;
  refs.span.textContent = colorName;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
