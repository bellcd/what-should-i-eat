import React from 'react';
import Directions from './directions.js';
import Ingredients from './ingredients.js';
import getRandomMeal from '../utilities/networking.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    getRandomMeal();
    return (
      <div>
        <Directions></Directions>
        <Ingredients></Ingredients>
      </div>
    );
  }
}

export default App;
