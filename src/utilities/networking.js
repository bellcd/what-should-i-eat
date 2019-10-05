let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

let getRandomMeal = () => {
  return fetch(url)
  .then((res) => res.json())
  .then((res) => {
    return organizeMeal(res.meals[0]);
  });
}

let organizeMeal = (meal) => {
  let keys = Object.keys(meal);
  meal = keys.reduce((acc, currentValue) => {
    let ingredientName;
    let ingredientNum;
    if (currentValue.includes('strIngredient')) {
      ingredientNum = currentValue.slice(13);
      ingredientName = meal[currentValue];

      if (ingredientName !== '' && ingredientName !== null) {
        acc.ingredients[ingredientName] = meal['strMeasure' + ingredientNum].trim();
      }
    } else if (!currentValue.includes('strMeasure')) {
      Object.assign(acc, {[currentValue]: meal[currentValue]})
    }
    return acc;
  }, {ingredients: {}});
  return meal;
}

export default getRandomMeal;