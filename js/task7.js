const spanTextEl = document.querySelector('#text');
const rangeSiizeEl = document.querySelector('#font-size-control');
rangeSiizeEl.addEventListener("input", event => {
    spanTextEl.style.fontSize = (`${event.currentTarget.value}px`);
    
});
   
