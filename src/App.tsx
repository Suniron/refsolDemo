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
    </div>
  );
}

export default App;
