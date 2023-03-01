const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onChangeText);

function onChangeText(event) {
    refs.span.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === '') {
        refs.span.textContent = 'Anonymous'        
    }
};