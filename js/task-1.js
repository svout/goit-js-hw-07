const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(categoryItem => {
    const categoryTitle = categoryItem.querySelector('h2')

    console.log(`Category: ${categoryTitle.textContent}`)

    const categoryElements = categoryItem.querySelectorAll('ul > li')
    console.log(`Elements: ${categoryElements.length}`);
})