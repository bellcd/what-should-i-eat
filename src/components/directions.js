import React from 'react';

let Directions = (props) => {
  let directions;
  if (props.directions === null) {
    directions = 'the directions would go here!';
  } else {
    directions = props.directions;
  }
  return (
    <div>{directions}</div>
  );
}

export default Directions;