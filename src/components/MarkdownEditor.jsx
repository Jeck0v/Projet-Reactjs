import React from 'react';
import MarkdownToolbar from './MarkdownToolbar';
import MarkdownPreview from './MarkdownPreview';

function MarkdownEditor({ markdown, setMarkdown, title, setTitle, onSave, onExport }) 
{
  return (
    <div className="editor-container">
      <div className="editor-input-section">
        <input type="text" placeholder="Nom du Fichier" value={title} onChange={(e)=> setTitle(e.target.value)} className="title-input"/>
        <textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)} placeholder="Vous pouvez écrire votre markdown ici..." className="markdown-input"/>
      </div>
      <MarkdownToolbar  markdown={markdown} setMarkdown={setMarkdown} onSave={onSave} onExport={onExport}/>
      <MarkdownPreview markdown={markdown}/>
    </div>
  );
}

export default MarkdownEditor;