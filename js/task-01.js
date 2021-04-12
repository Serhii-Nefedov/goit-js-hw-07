const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);

numberOfCategories.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}, 
    Количество элементов: ${element.lastElementChild.children.length}`,
  );
});
