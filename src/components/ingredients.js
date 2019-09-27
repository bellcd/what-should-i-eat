import React from 'react';
import Ingredient from './ingredient.js';

let Ingredients = ({ingredients}) => {
  let ingredientList;
  if (ingredients !== null) {
    ingredientList = Object.keys(ingredients).map((ingredient) => {
      return <Ingredient name={ingredient} amount={ingredients[ingredient]}></Ingredient>
    });
  } else {
    ingredientList = <div></div>
  }

  console.log(ingredientList);
  return (
    <div>{ingredientList}</div>
  );
}
export default Ingredients;