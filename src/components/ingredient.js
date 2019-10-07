import React from 'react';

let Ingredient = ({name, amount}) => {
  return (
    <div>{name}
      <p>
        <span className="amount">{amount}</span>
      </p>
    </div>
  );
}
export default Ingredient