import React from 'react';
import Directions from './directions.js';
import Ingredients from './ingredients.js';
import Video from './video.js';
import getRandomMeal from '../utilities/networking.js';
import './ingredients.css';
import './app.css';
import './video.css';

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

  render() {
    let meal = this.state.meal;
    let buttonText = 'Get a Meal';
    let button = <button onClick={this.getMeal.bind(this)}>{buttonText}</button>;
    let h2Text;
    let imgDiv;
    let directionsDiv;
    let ingredientsDiv;
    let mealOrNoMeal = 'no-meal';
    let video;


    if (meal === null) {

    } else {
      mealOrNoMeal = 'meal';
      buttonText = 'Get a New Meal';
      h2Text = meal.strMeal;
      imgDiv =
        <div className="img-wrapper">
          <img src={meal.strMealThumb} alt={`a ${meal.strMealThumb}`}></img>
        </div>;
      video = <Video url={meal.strYoutube.replace('watch?v=', 'embed/')}></Video>
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
        {video}
        {directionsDiv}
        {ingredientsDiv}
        {button}
      </div>
    );
  }
}

export default App;
