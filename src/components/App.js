import React, { useState } from 'react'

import '../styles/App.css';
const App = () => {
  const [rangeval, setRangeval] = useState(16);
  const [charsize, setcharsize] = useState(50);
  const [text, settext] = useState('');

  const handleChange = (event) => {
    settext(event.target.value)
  }

  return (
    <div id="main">
      <h5>Font sise Picket <span>{rangeval}</span> </h5>
      <input id="fontSize-input" value={rangeval} type="range" min="16" max="32" className="custom-range"
        onChange={(event) => setRangeval(event.target.value)} />
      <h5>Word limit Input</h5>
      <input type="number" value={charsize} name="" id="char-limit-input"
        onChange={(event) => setcharsize(event.target.value)} />
      <br />
      <br />

      <textarea maxlength={charsize} limit style={{ fontSize: rangeval + 'px' }} onChange={handleChange} name="" id="" cols="30" rows="10"></textarea>
      <div id="word-counter">
        Total number of words written <span>{text.split(' ').filter(Boolean).length}</span>
      </div>
      <div id="char-counter">
        Total number of characters used <span>{text.length}</span>
      </div>
    </div>
  )
}


export default App;
