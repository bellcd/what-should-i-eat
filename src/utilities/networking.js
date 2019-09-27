import { objectTypeSpreadProperty } from "@babel/types";

let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

let getRandomMeal = () => {
  return fetch(url)
  .then((res) => res.json())
  .then((res) => {
    let meal = res.meals[0];
    organizeMeal(meal);
    return meal;

  });
}

// let getRandomMeal = (callback) => {
//   let meal = fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     meal = res.meals[0];
//     callback(meal);
//   });
// }

let organizeMeal = (meal) => {
  let keys = Object.keys(meal);
  keys = keys.filter((key) => {
    return key.includes('strIngredient') || key.includes('strMeasure');
  })
  console.log(keys);
}

export default getRandomMeal;