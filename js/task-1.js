const allCategoriesRef = document.querySelectorAll('.item');

const getAmountOfCategories = allCategories =>
  console.log(`В списке ${allCategories.length} категории`);

getAmountOfCategories(allCategoriesRef);

const getTitleandSubcategories = categories =>
  categories.forEach(category => {
    const titleRef = category.querySelector('h2');
    const itemsRef = category.querySelectorAll('li');
    console.log(
      `Категория: ${titleRef.textContent}, Количество элементов: ${itemsRef.length}`,
    );
  });
getTitleandSubcategories(allCategoriesRef);
