import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileDisplay from "../Markdown/FileDisplay.jsx";
import DateTimeDisplay from "../PageOne/DateTime.jsx";

function PageOne() {
  const [citation, setCitation] = useState('');
  const [blague, setBlague] = useState('');
 useEffect(() => {
    // Fetch de la citation du jour
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setCitation(data.slip.advice));
    // Fetch de la blague du jour
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => setBlague(`${data.setup} - ${data.punchline}`));
  }, []);

  return (
      <div>
          {/* Date et heure voir dans DateTime.jsx */}
          <p>Date et heure : <DateTimeDisplay/> </p>
          <p>Citation du jour : {citation}</p>
          <p>Blague du jour : {blague}</p>
          <p>Recette du jour : </p>
          <p>Cocktail du jour: </p>
          <p>Evenement du jour: </p>
          <h2>Liste des fichiers Markdown</h2>
          <div className="home-page">
              <FileDisplay/>
          </div>
      </div>
  );
}

export default PageOne;
