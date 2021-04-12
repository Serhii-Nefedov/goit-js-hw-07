const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientContainerEl = document.getElementById('ingredients');
const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    
    return itemEl;
  });
};

const ingredientsList = makeIngredientsList(ingredients);
console.log(ingredientsList);
ingredientContainerEl.append(...ingredientsList);
