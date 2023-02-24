const valuesEl = document.querySelectorAll('#counter button');
let counterValue = 0;


valuesEl[0].addEventListener('click', (element) => {
    console.log('Зменшити');
    counterValue = element - 1;
});
valuesEl[1].addEventListener('click', (element) => {
    console.log('Збільшити');
    counterValue = element + 1;
});
console.log(counterValue);