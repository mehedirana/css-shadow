import React, { useState } from 'react'

import './App.css';

function App() {
  const [horizontalLen, setHorizontalLen] = useState(10);
  const [verticalLen, setHverticalLen] = useState(10);
  const [blur, setBlur] = useState(10);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
        <input type="range" id="test5" min="-200" max="200" value={horizontalLen} onChange={(e) => setHorizontalLen(e.target.value)} />
        <label>Vertical length</label>
        <input type="range" id="test5" min="-200" max="200" value={verticalLen} onChange={(e) => setHverticalLen(e.target.value)} />
        <label>Blur</label>
        <input type="range" id="test5" min="0" max="200" value={blur} onChange={(e) => setBlur(e.target.value)} />
      </div>
      <div className="output">
        <div className="box" style={{boxShadow:`${horizontalLen}px ${verticalLen}px ${blur}px black`}}>

        </div>

      </div>
    </div>
  );
}

export default App;
