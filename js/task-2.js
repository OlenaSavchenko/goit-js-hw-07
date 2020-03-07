const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createIngredient = ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;

  return itemRef;
};
const ingredientsItem = ingredients.map(ingredient =>
  createIngredient(ingredient),
);
const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsItem);
