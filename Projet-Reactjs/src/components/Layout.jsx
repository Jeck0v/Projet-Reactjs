import React from 'react';
import { Link } from 'react-router-dom';
import PageOne from './PageOne';

function Layout() {
  return (
    <div className="container">
      {/* En tete */}
      <header className="header">
        <h1>Mon éditeur de MarkDown</h1>
      </header>

      {/* Contenu principal avec la barre latérale et le contenu principal */}
      <div style={{ display: 'flex' }}>
        {/* Barre latérale */}
        <aside className="Lateral">
          <h3>Navigation</h3>
          <Link to="#">voyager</Link>
          <Link to="#">ecrire</Link>
          <Link to="#">Astuces</Link>
          <Link to="#">Démos</Link>
          <Link to="#">Voir</Link>
          <Link to="#">Forums</Link>
          <Link to="#">Les Meilleur</Link>
          <Link to="#">Autres éditeur</Link>
        </aside>
        {/* Contenu principal */}
        <main style={{ flex: 1, paddingLeft: '20px' }}>
          <nav className="PageOne-nav">
            <Link to="/">📝 Editer</Link>
          </nav>
          {/* Contenu de la page */}
          <PageOne />
        </main>
      </div>
    </div>
  );
}

export default Layout;
