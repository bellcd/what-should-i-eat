import React from 'react';

let Directions = (props) => {
  let directions;
  if (props.directions !== null) {
    directions = props.directions;
  }
  return (
    <div className="directions"><p>{directions}</p></div>
  );
}

export default Directions;