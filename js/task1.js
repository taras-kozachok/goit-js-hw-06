

const ulCategoriesEl = document.querySelectorAll('.item');
console.log("Number of categories: ", ulCategoriesEl.length);

const titelEl = [...ulCategoriesEl]
    .map(
        categorie => `Категория: ${categorie.children[0].textContent}
        Количество елементов: ${categorie.children[1].children.length}`
    )
   .join('\n');
console.log(titelEl);


