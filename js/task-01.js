const listEl = document.querySelectorAll('.item');

console.log('Number of categories:', listEl.length);
listEl.forEach(element => {
    const category = element.firstElementChild;
    const numberOfElements = element.lastElementChild.children;
    console.log('Category:' , category.textContent);
    console.log('Elements:' , numberOfElements.length);
});
