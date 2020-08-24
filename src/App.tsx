import React from 'react';
import './App.css';
import Editor from './Components/Editor';

function App() {
  return (
    <div className="App">
      <h1 id="App-title">Exemple d'éditeur pour BUS <span role="img" aria-label="icones">🚌💡</span></h1>
      <div id="editor-div">
        <Editor />
      </div>
      <p>Exemple proposé par <a href="mailto:etienne.blanc@orange.com">Etienne BLANC</a> (<a href="https://cv.etienne-blanc.com/" rel="noopener noreferrer" target="_blank">site</a>)</p>
    </div>
  );
}

export default App;
