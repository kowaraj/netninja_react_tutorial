import React, {useState } from 'react';

function AddN(props) {

    const [state, setState] = useState({
        name: null, 
        age: null, 
        belt: null
    })

    const handleChange = (e) => {
        setState({...state, 
            [e.target.id]: e.target.value
        })
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
        props.cb(state)
    }    


    return (
    <div className="AddN">
    <p> Name: {state.name}, age: {state.age}, belt: {state.belt}</p>

        
        <form onSubmit={handleSubmit}>
            <input type='text' id='name' onChange={handleChange} />
            <input type='text' id='age'  onChange={handleChange}/>
            <input type='text' id='belt' onChange={handleChange}/>
            <button> Submit</button>
        </form>

    </div>
  );

}

export default AddN;
