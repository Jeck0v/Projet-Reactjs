import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileDisplay from "../Markdown/FileDisplay.jsx";

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
          <p>Date et heure : {new Date().toLocaleString()} </p>
          <p>Citation du jour : {citation}</p>
          <p>Blague du jour : {blague}</p>
          <p> Recette du jour: </p>
          <p> Recette de Mocktail du jour: </p>
           <div className="home-page">
                <FileDisplay />
           </div>
      </div>
  );
}

export default PageOne;
