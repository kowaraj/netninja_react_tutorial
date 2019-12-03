import React from 'react';
import Com2 from './Com2';

function App() {
  
  const state = {
    ninjas: [
      {name: 'A', age: 1, id:1},
      {name: 'B', age: 2, id:2},
      {name: 'C', age: 3, id:3}
    ]
  }

  return (
    <div className="App">

      <Com2 ninjas={state.ninjas} />

    </div>
  );
}

export default App;
