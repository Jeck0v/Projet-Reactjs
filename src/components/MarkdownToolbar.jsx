import React, { useRef } from 'react';

function MarkdownToolbar({ markdown, setMarkdown, onSave, onExport }){
  const fileInputRef = useRef(null);
  
  // On aurais pu le faire avec un switch case
  const shortcuts = {
    title: '\n# Titre \nDescription complète\n',
    list: '\n- Element 1 \n- Element 2 \n- Element 3\n',
    link: '\n[Texte](url)\n',
    img: '\n![alt texte](url-img)\n',
    code: '\n```\nVotre code\n```\n'
  };

  function handleShortcut(type){
    if (type === 'reset'){
      setMarkdown('');
    }
    else {
      setMarkdown(markdown + shortcuts[type]);
    }
  };
  // Générer par l'IA
  function handleImport(event){
    const file = event.target.files[0];
    if (file){
      const reader = new FileReader();
      reader.onload = (e)=> {
        setMarkdown(e.target.result);
      };
      reader.readAsText(file);
    }
    // autorise de réimporter un fichier
    event.target.value = '';
  };
  // Fin de la génération par l'IA
  function triggerFileInput(){
    fileInputRef.current.click();
  };

  return (
    // ToolBar pour rajouter les racourcis ect...
    <div className="toolbar">
      <input type="file" ref={fileInputRef} onChange={handleImport} accept=".md" style={{ display: 'none' }}/>
      <button onClick={()=> handleShortcut('title')}>Titre</button>
      <button onClick={()=> handleShortcut('list')}>Liste</button>
      <button onClick={()=> handleShortcut('link')}>Lien</button>
      <button onClick={()=> handleShortcut('img')}>Image</button>
      <button onClick={()=> handleShortcut('code')}>Code</button>
      <button onClick={()=> handleShortcut('reset')}>Réinitialiser</button>
      <button onClick={onSave}>Enregistrer</button>
      <button onClick={onExport}>Exporter</button>
      <button onClick={triggerFileInput}>Importer</button>
    </div>
  );
}

export default MarkdownToolbar;