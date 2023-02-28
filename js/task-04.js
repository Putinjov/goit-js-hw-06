const refs = {
    counter: document.querySelector('#value'),
    lowValue: document.querySelector('[data-action="decrement"]'),
    incValue: document.querySelector('[data-action="increment"]'),
};
refs.lowValue.addEventListener('click', () => {
  refs.counter.textContent -= 1;
  });
refs.incValue.addEventListener('click', () => {
let countValue = parseInt(refs.counter.textContent);
refs.counter.textContent = countValue + 1;
});