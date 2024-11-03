import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileDisplay from "../Markdown/FileDisplay.jsx";
import DateTimeDisplay from "../PageOne/DateTime.jsx";

function PageOne() {
  const [citation, setCitation] = useState('');
  const [blague, setBlague] = useState('');
  const [histoires, setHistoires] = useState([]);
  const [drinks, setDrinks] = useState('')
  const [ meal , setMeals ] = useState('')

 useEffect(() => {
    // Fetch de la citation du jour
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setCitation(data.slip.advice))
      .catch(error => console.error("Erreur lors du fetch de la citation du jour:", error));
    // Fetch de la blague du jour
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setBlague(`${data.setup} - ${data.punchline}`))
      .catch(error => console.error("Erreur lors du fetch de la blague du jour:", error));
    // Fetch event historique du jour
    fetch('http://history.muffinlabs.com/date')
      .then(response => response.json())
      .then(data => setHistoires(data.data.Events.slice(0, 2))) // Afficher seulement les 2 premiers événements
      .catch(error => console.error("Erreur lors du fetch de l'histoire du jour:", error));
    // Fetch Cocktail du jour
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        const drinksData = data.drinks;
        setDrinks(drinksData[0])
      .catch(error => console.error("Erreur lors du fetch du cocktail du jour: ", error))
    }, []);
    // Fetch recette du jour
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        const mealsData = data.meals;
        setMeals(mealsData[0]);
      })
     .catch(error => console.error("Erreur lors du fetch de la recette du jour:", error))
    }, []);


  return (
      <div>
          {/* Date et heure voir dans DateTime.jsx */}
          <h4>Date et heure: <DateTimeDisplay/></h4>
          <h4>Citation du jour: {citation}</h4>
          <h4>Blague du jour: {blague}</h4>
          <h4>Événements historiques du jour:</h4>
          <ul>
              {histoires.map((histoire, index) => (
                  <li key={index}>
                      {histoire.text}
                  </li>
              ))}
          </ul>
          <section>
              <h4>Boisson du jour: {drinks.strDrink}</h4>
              {drinks && (
                  <article>
                      <img src={drinks.strDrinkThumb} alt={drinks.strDrink} width="100"/>
                      <p>{drinks.strInstructions}</p>
                  </article>
              )}
          </section>

          <section>
              <h4>Recette du jour: {meal.strMeal}</h4>
              {meal && (
                  <article>
                      <img src={meal.strMealThumb} alt={meal.strMeal} width="100"/>
                      <button onClick={() => document.getElementById('instructionsDialog').showModal()}>
                          Details (ingredients et preparations)
                      </button>
                      <dialog id="instructionsDialog">
                          <button onClick={() => document.getElementById('instructionsDialog').close()}>
                              X
                          </button>
                          <p>{meal.strInstructions}</p>
                      </dialog>
                  </article>
              )}
          </section>

          <h2>Liste des fichiers Markdown</h2>
          <div className="home-page">
              <FileDisplay/>
          </div>
      </div>
  );
}

export default PageOne;
