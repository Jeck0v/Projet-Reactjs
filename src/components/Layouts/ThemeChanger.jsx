import React, { useState, useEffect } from 'react';

const ThemeChanger = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
      });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);  /* change l'attribut data-theme à la racine et le stock*/
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'galaxy' : 'light')); /* permet d'alterner entre les 2 thèmes */
  };

  return (
    <button className="galaxybutton" onClick={toggleTheme}>
       {theme === 'light' ? 'Galaxy !!!!' : 'Thème de base'}
    </button>
  );
};

export default ThemeChanger;