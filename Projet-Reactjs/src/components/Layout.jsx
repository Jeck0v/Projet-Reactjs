import React from 'react';
import {  Link } from 'react-router-dom';
import PageOne from './PageOne';

function Layout() {
    return (
      <div>
        <header className="header">
          <h1>Mon éditeur de MarkDown</h1>
        </header>
        
        <nav className="PageOne-nav">
          <Link to="/">📝 Editer</Link>
        </nav>
        
        <main className="container">
          <PageOne/>
        </main>
      </div>
    );
  };
export default Layout;