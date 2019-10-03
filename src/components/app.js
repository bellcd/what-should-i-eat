import React from 'react';
import Directions from './directions.js';
import Ingredients from './ingredients.js';
import getRandomMeal from '../utilities/networking.js';
import './ingredients.css';
import './app.css';

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
    let meal = this.state.meal;
    if (meal === null) {
      return (
        <button onClick={this.getMeal.bind(this)}>Get meal</button>
      );
    } else {
      return (
        <div className="container">
          <button onClick={this.getMeal.bind(this)}>Get meal</button>
          <h1>{meal.strMeal}</h1>
          <div className="img-wrapper">
            <img src={meal.strMealThumb}></img>
          </div>
          <Directions directions={meal.strInstructions}></Directions>
          <Ingredients ingredients={meal.ingredients}></Ingredients>
        </div>
      );
    }
  }
}

export default App;
