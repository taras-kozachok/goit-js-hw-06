const bodyEl = document.querySelector("body");
const buttonColorEl = document.querySelector('button[class="change-color"]');
const spanColorEl = document.querySelector('span[class="color"]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonColorEl.addEventListener("click", () => {
    const colorBody = getRandomHexColor();
    spanColorEl.textContent = colorBody;
    bodyEl.style.backgroundColor = colorBody;

});
