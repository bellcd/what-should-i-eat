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
    let buttonText = 'Get a Meal';
    let button = <button onClick={this.getMeal.bind(this)}>{buttonText}</button>;
    let h2Text;
    let imgDiv;
    let directionsDiv;
    let ingredientsDiv;
    let mealOrNoMeal = 'no-meal';


    if (meal === null) {

    } else {
      mealOrNoMeal = 'meal';
      buttonText = 'Get a New Meal';
      h2Text = meal.strMeal;
      imgDiv =
        <div className="img-wrapper">
          <img src={meal.strMealThumb} alt={`a ${meal.strMealThumb}`}></img>
        </div>;
      directionsDiv = <Directions directions={meal.strInstructions}></Directions>;
      ingredientsDiv = <Ingredients ingredients={meal.ingredients}></Ingredients>;
    }
    return (
      <div className={`container ${mealOrNoMeal}`}>
        <header>
          <h1>What Should I Eat?</h1>
          <h2>{h2Text}</h2>
        </header>
        {imgDiv}
        {directionsDiv}
        {ingredientsDiv}
        {button}
      </div>
    );
  }
}

export default App;
