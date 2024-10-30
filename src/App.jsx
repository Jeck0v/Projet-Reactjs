// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditorPage from './components/Markdown/EditorPage.jsx';
import PageOne from "./components/PageOne/PageOne.jsx";
import Layout from "./components/Layouts/Layout.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout /> {/* Ajouté ici en tant qu'enveloppe */}
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/editor" element={<EditorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
