import React from 'react';
import MarkdownToolbar from './MarkdownToolbar';
import MarkdownPreview from './MarkdownPreview';


function MarkdownEditor({ markdown, setMarkdown, title, setTitle, onSave, onExport, onCopy }) 
{
  return (
    <div className="editor-container">
      <MarkdownToolbar  markdown={markdown} setMarkdown={setMarkdown} onSave={onSave} onExport={onExport} onCopy={onCopy}/>
      <div className="editor-input-section">
        <h2>Editeur</h2>
        <input type="text" placeholder="Nom du Fichier" value={title} onChange={(e)=> setTitle(e.target.value)} className="title-input"/>
        <textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)} placeholder="Vous pouvez écrire votre markdown ici..." className="markdown-input"/>
      </div>
      <MarkdownPreview markdown={markdown}/>
    </div>
  );
}

export default MarkdownEditor;