let url = `https://www.themealdb.com/api/json/v1/1/random.php`;

let getRandomMeal = () => {
  return fetch(url)
  .then((res) => res.json())
  .then((res) => {
    return res.meals[0];
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

export default getRandomMeal;