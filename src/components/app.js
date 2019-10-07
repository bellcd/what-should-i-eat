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
      meal: null,
      intro: true
    }
  }

  getMeal(e) {
    if (this.state.intro) {
      e.target.classList = 'meal';
      document.querySelector('div.intro').classList = '';
      document.querySelector('footer').classList = 'show';
      document.querySelector('button').textContent = 'Get A New Meal';
    }

    getRandomMeal()
      .then((meal) => {
        this.setState((state) => {
          return {
            meal: meal,
            intro: false
           }
        });
      });
  }

  render() {
    let meal = this.state.meal;
    let buttonText = 'Get A Meal';
    let button = <button onClick={this.getMeal.bind(this)}>{buttonText}</button>;
    let h2Text;
    let imgDiv;
    let directionsDiv;
    let ingredientsDiv;
    let video;


    if (meal === null) {

    } else {
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
      <div className="intro">
        <header>
          <h1>What Should I Eat?</h1>
          <h2>{h2Text}</h2>
        </header>
        <div className="main">
        {imgDiv}
        {directionsDiv}
        </div>
        <div className="media">
          {video}
        </div>
        {ingredientsDiv}
        {button}
        <footer className="hide">Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://bellcd.github.io/">Christian Bell</a></footer>
      </div>
    );
  }
}

export default App;
