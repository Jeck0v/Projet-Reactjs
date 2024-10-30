// Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header className="header">
        <h1>CyberMD</h1>
        <nav className="PageOne-nav">
          <Link to="/">Accueil</Link>
          <Link to="/editor">Éditeur</Link>
        </nav>
      </header>
    </div>
  );
}

export default Layout;
