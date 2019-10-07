import React from 'react';
import Ingredient from './ingredient.js';

let Ingredients = (props) => {
  let ingredientList;
  if (props.ingredients === null) {
    ingredientList = <div></div>;
  } else {
      ingredientList = Object.keys(props.ingredients).map((ingredient, i) => {
      return <Ingredient name={ingredient} amount={props.ingredients[ingredient]} key={i}></Ingredient>
    });
  }

  return (
    <div className="ingredients">{ingredientList}</div>
  );
}
export default Ingredients;