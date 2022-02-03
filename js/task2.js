const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const  makeIngreients = (ingredName) => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = ingredName;
    ingredientsEl.classList.add('item');
    return ingredientsEl;
}
const elements = ingredients.map(makeIngreients);
const listEl = document.querySelector('#ingredients');
elements.forEach(element => (listEl.append(element))) ;


    