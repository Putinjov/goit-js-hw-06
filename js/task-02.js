const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
let itemCreate = ingredients.map(elements => { 
  const itemEl = document.createElement('li');
  itemEl.textContent = elements;
  itemEl.classList.add('item'); 
  return itemEl;
});
listEl.append(...itemCreate);
