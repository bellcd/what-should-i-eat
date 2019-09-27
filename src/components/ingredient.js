import React from 'react';

let Ingredient = ({name, amount}) => {
  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
    </div>
  );
}
export default Ingredient