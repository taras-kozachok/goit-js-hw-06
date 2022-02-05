const spanTextEl = document.querySelector('#text');
const rangeSizeEl = document.querySelector('#font-size-control');
spanTextEl.style.fontSize = (`${rangeSizeEl.value}px`);
rangeSizeEl.addEventListener("input", event => {
 spanTextEl.style.fontSize = (`${rangeSizeEl.value}px`);
   
});

