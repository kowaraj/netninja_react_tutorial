import React, { useState } from 'react';
import Com2 from './Com2';
import AddN from './AddN';

function App() {
  const [state, setState] = useState({
    ninjas: [
      {name: 'A', age: 1, belt: "red", id:1},
      {name: 'B', age: 2, belt: "yellow", id:2},
      {name: 'C', age: 3, belt: "green", id:3}
    ]}
    );

  const addN = (n) => {
    n.id = Math.random()
    setState({
      ninjas: [...state.ninjas, n]
    })
  }

  return (
    <div className="App">
      <Com2 ninjas={state.ninjas}/>
      <AddN  cb={addN} />
    </div>
  );
}

export default App;
