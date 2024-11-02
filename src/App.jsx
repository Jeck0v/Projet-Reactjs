import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditorPage from './components/Markdown/EditorPage.jsx';
import Layout from "./components/Layouts/Layout.jsx";
import PageOne from "./components/PageOne/PageOne.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route de Layout qui contient PageOne */}
        <Route path="/" element={<Layout />}>
          <Route index element={<PageOne />} /> {/* Page d'accueil */}
        </Route>
        {/* Route de l'éditeur */}
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;