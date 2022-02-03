let counterValue = 0;
const buttonDecEl = document.querySelector('button[data-action="decrement"]');
const buttonIncEl = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');
const changeValueSpan = (i) => {
  counterValue += i;
  valueEl.textContent = counterValue;
}
buttonDecEl.addEventListener("click", () => {
  changeValueSpan(-1);
});
buttonIncEl.addEventListener("click", () => {
  changeValueSpan(1);
});
    