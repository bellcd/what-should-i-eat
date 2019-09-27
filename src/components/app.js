import React from 'react';
import Directions from './directions.js';
import Ingredients from './ingredients.js';
import getRandomMeal from '../utilities/networking.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null
    }
  }

  getMeal() {
    getRandomMeal()
      .then((meal) => {
        this.setState((state) => {
          return { meal: meal }
        });
      });
  }

  // comments on using one style of getMeal (along with getRandomMeal in networking.js) over the other?
  // getMeal() {
  //   let callback = function(meal) {
  //     this.setState((state) => {
  //       return { meal: meal }
  //     });
  //   }

  //   getRandomMeal(callback.bind(this));
  // }

  render() {

    return (
      <div>
        <button onClick={this.getMeal.bind(this)}>Get meal</button>
        <Directions></Directions>
        <Ingredients>}></Ingredients>
      </div>
    );
  }
}

export default App;
