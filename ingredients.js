const ingredientsEl = document.getElementById('ingredients');

const cocktailId = new URLSearchParams(window.location.search).get('cocktailId');

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
 .then(response => response.json())
 .then(data => {
    const cocktail = data.drinks[0];
    for (let i = 1; i <= 15; i++) {
      if (cocktail[`strIngredient${i}`]) {
        const ingredientEl = document.createElement('div');
        ingredientEl.classList.add('ingredient');
        const ingredientImgEl = document.createElement('img');
        ingredientImgEl.src = `https://www.thecocktaildb.com/images/ingredients/${cocktail[`strIngredient${i}`]}-Small.png`;
        ingredientImgEl.alt = cocktail[`strIngredient${i}`];
        ingredientEl.appendChild(ingredientImgEl);
        const ingredientNameEl = document.createElement('span');
        ingredientNameEl.textContent = cocktail[`strIngredient${i}`];
        ingredientEl.appendChild(ingredientNameEl);
        ingredientsEl.appendChild(ingredientEl);
      }
    }
  });