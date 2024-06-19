const cocktailsEl = document.getElementById('cocktails');

async function fetchCocktails() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a');
  const data = await response.json();
  const cocktails = data.drinks.slice(0, 8);
  displayCocktails(cocktails);
}

function displayCocktails(cocktails) {
  cocktails.forEach(cocktail => {
    const cocktailEl = document.createElement('div');
    cocktailEl.classList.add('cocktail');
    cocktailEl.innerHTML = `
      <a href="ingredients.html?cocktailId=${cocktail.idDrink}">
        <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
      </a>
      <h2>${cocktail.strDrink}</h2>
    `;
    cocktailsEl.appendChild(cocktailEl);
  });
}

fetchCocktails();