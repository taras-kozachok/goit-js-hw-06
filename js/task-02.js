const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const  makeIngredients = (ingredName) => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.textContent = ingredName;
    ingredientsEl.classList.add('item');
    return ingredientsEl;
}
const elements = ingredients.map(makeIngredients);
const listEl = document.querySelector('#ingredients');
listEl.append(...elements) ;
