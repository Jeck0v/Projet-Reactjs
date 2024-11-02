import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="container">
      {/* En-tête */}
      <header className="header">
        <h1>Cyber.md</h1>
      </header>

      {/* Contenu principal avec la barre latérale et le contenu principal */}
      <div style={{ display: 'flex' }}>
        {/* Barre latérale */}
        <aside className="Lateral">
          <h3>Navigation</h3>
          <Link to="/">Accueil</Link>
          <Link to="/editor">Créer un fichier</Link> {/* Lien vers l'éditeur */}
          <Link to="#">Voyager</Link>
          <Link to="#">Ecrire</Link>
          <Link to="#">Astuces</Link>
          <Link to="#">Démos</Link>
          <Link to="#">Voir</Link>
          <Link to="#">Forums</Link>
          <Link to="#">Les Meilleur</Link>
          <Link to="#">Autres éditeur</Link>
          {/* Autres liens */}
        </aside>

        {/* Contenu principal */}
        <main style={{ flex: 1, paddingLeft: '20px' }}>
          <Outlet /> {/* Affiche le contenu de chaque route */}
        </main>
      </div>
    </div>
  );
}

export default Layout;

