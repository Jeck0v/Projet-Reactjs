import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PageOne() {
  const [citation, setCitation] = useState('');
  const [blague, setBlague] = useState('');
  const [fichier, setfichier] = useState(['Ex1.md', 'Ex2.md']); // Simuler la liste des fichiers Markdown
  

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
      <p>Date et heure : {new Date().toLocaleString() } </p>
      <p>Citation du jour : {citation}</p>
      <p>Blague du jour : {blague}</p>
      <h2>Liste des fichiers Markdown</h2>
      <ul>
        {fichier.map(file => (
          <li key={file}>
            <Link to={`/edit/${file}`}>{file}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PageOne;
