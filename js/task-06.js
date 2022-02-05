const inputValidEl = document.querySelector('#validation-input');
inputValidEl.addEventListener("blur", event => {
    event.currentTarget.value = (event.currentTarget.value.trim());
    
    if (((event.currentTarget.value).length) === 6) {
        inputValidEl.classList.add('valid');
        inputValidEl.classList.remove('invalid')
    }
    else {inputValidEl.classList.remove('valid');
        inputValidEl.classList.add('invalid');

    } 
});
