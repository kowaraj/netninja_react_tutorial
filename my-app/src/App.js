import React from 'react';
import Com1 from './Com1';
import Com2 from './Com2';

function App() {
  return (
    <div className="App">
      <h1>my First React App</h1>
      <p>Welcome</p>
      <Com1/>
      <Com2 name="B" age="4" belt="green"/>
      <Com2 name="C" age="444" belt="white"/>
    </div>
  );
}

export default App;
