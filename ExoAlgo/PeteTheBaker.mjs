let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

let available1 = { sugar: 500, flour: 2000, milk: 2000 };
let recipe1 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };

function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (const ingredient in recipe) {
    if (!available.hasOwnProperty(ingredient)) {
      return 0;
    }
    const cakesWithIngredient = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    maxCakes = Math.min(maxCakes, cakesWithIngredient);
  }

  return maxCakes;
}

console.log(cakes(recipe, available));
