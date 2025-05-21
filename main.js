const mealContainer = document.getElementById('meal-container');

// Function to fetch all chicken meals
async function fetchAllChickenMeals() {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');
    const data = await response.json();

    // Check if meals exist
    if (data.meals) {
      data.meals.forEach(meal => displayMeal(meal)); // Display all meals
    } else {
      mealContainer.innerHTML = '<p>No meals found!</p>';
    }
  } catch (error) {
    console.error('Error fetching chicken meals:', error);
  }
}

// Function to render a meal
function displayMeal(meal) {
  const { strMeal, strMealThumb, strInstructions, strYoutube } = meal;

  // Collect first 5 ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) ingredients.push(ingredient);
  }

  // Create dynamic content for each meal
  const mealDiv = document.createElement('div');
  mealDiv.classList.add('meal');
  mealDiv.innerHTML = `
    <img src="${strMealThumb}" alt="${strMeal}">
    <div>
      <h2>${strMeal}</h2>
      <p>${strInstructions.substring(0, 150)}...</p>
      <ul>
        ${ingredients.slice(0, 5).map(ingredient => `<li>${ingredient}</li>`).join('')}
      </ul>
      <a href="${strYoutube}" target="_blank">Watch Video</a>
    </div>
  `;

  // Append the meal to the container
  mealContainer.appendChild(mealDiv);
}

// Fetch and render all chicken meals on page load
fetchAllChickenMeals();
