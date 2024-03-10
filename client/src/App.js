import React from 'react';
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <video src="vid1.mp4" width="50%" controls />
        <video src="vid3.mp4" width="50%" controls />
      </div>
      <textarea rows="4" cols="50" placeholder="Enter text here..." />
    </div>
  );
}

export default App;
