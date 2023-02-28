const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};
refs.btnChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor()
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
