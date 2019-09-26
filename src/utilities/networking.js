let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

let getRandomMeal = () => {
  let meal;
  fetch(url)
  .then((res) => res.json())
  .then((res) => {
    meal = res.meals[0];
  });
  return meal;
}

export default getRandomMeal;