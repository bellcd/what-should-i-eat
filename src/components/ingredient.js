import React from 'react';

let Ingredient = ({name, amount}) => {
  return (
    <li>{name}, <span className="amount">{amount}</span></li>
  );
}
export default Ingredient