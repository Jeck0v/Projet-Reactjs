import React from 'react';
import { marked } from 'marked';

function MarkdownPreview({ markdown }){
  return (
    <div className="preview-container">
      <h2>Prévisualisation</h2>
      <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }}/>
    </div>
  );
}

export default MarkdownPreview;