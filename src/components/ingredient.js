import React from 'react';

let Ingredient = ({name, amount}) => {
  return (
    <div>{name}, <span className="amount">{amount}</span></div>
  );
}
export default Ingredient