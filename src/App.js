import React, { useState } from 'react';
import useInput from './components/useInput';
import useTextToggle  from './components/useTextToggle';
import './App.css';
function App() {
  const { value, onChange, reset } = useInput('');

  const [text, toggleText] = useTextToggle('Toggle me!');

  return (
    <div>
      <p>{text}</p>
      <button onClick={toggleText}>Toggle Text</button>
    <br/>
     <input type="text" value={value} onChange={onChange} />
     <button onClick={reset}>Reset</button>
     <p>Input Value: {value}</p>
   </div>
  );
}

export default App;








