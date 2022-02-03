const spanNameEl = document.querySelector('span#name-output');
const inputNameEl = document.querySelector('input#name-input');
inputNameEl.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === '') { spanNameEl.textContent = 'Anonymous' }
    else { spanNameEl.textContent = event.currentTarget.value.trim() };
});
