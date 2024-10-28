import React from 'react';
import { useNavigate } from 'react-router-dom';

function FileDisplay(){
  const navigate = useNavigate();
  const files = Object.keys(localStorage).filter(key=> key !== 'markdownFiles' && key !== 'scribe_extension_state' && localStorage.getItem(key));

  function handleSelectFile(fileId){
    if (fileId){
      navigate(`/editor?id=${fileId}`);
    }
    else {
      navigate('/editor');
    }
  };

   function renderFileList(){
    if (files.length > 0){
      return files.map((file) => (
        <li key={file} className="file-item">
          <span>{file}</span>
          <button onClick={()=> handleSelectFile(file)} className="open-button">
            Ouvrir
          </button>
        </li>
      ));
    }
    else {
      return <li>Aucun Fichier</li>;
    }
  };

  return(
    <div className="file-display">
      <h3>Fichiers Markdown Disponibles</h3>
      <ul className="file-list">
        {renderFileList()}
      </ul>
      <button onClick={()=> handleSelectFile(null)} className="new-file-btn">
        Créer un nouveau fichier
      </button>
    </div>
  );
  
  function HomePage(){
      return (
        <div className="home-page">
          <h1>Éditeur Markdown</h1>
          <FileDisplay />
        </div>
      );
  }
}


export default FileDisplay;