import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import MarkdownEditor from './MarkdownEditor';

function EditorPage(){
  const navigate = useNavigate();
  const location = useLocation();
  const [markdown, setMarkdown] = useState('');
  const [title, setTitle] = useState('');

  useEffect(()=> {
    const searchParams = new URLSearchParams(location.search);
    const fileId = searchParams.get('id');
    if (fileId){
      const content = localStorage.getItem(fileId);
      if (content){
        setMarkdown(content);
        setTitle(fileId);
      }
    }
  }, [location]);

  function handleSave(){
    if (title) {
      localStorage.setItem(title, markdown);
      console.log(`Fichier ${title} enregistrÃ©`);
      navigate('/');
    }
    else {
      console.log('Aucun fichier');
    }
  };

  // générer par l'ia 
  function handleExport(){
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title || 'Nouveau Fichier'}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };
  // fin de la génération

  return (
    <div className="editor-page">
      <div className="editor-header">
        <Link to="/" className="back-button">Retour</Link>
      </div>
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} title={title} setTitle={setTitle} onSave={handleSave} onExport={handleExport}/>
    </div>
  );
}

export default EditorPage;