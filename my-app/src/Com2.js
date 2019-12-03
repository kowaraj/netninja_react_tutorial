import React from 'react';

function Com2(props) {
    
    console.log(props);
    const { ninjas } = props.ninjas
    console.log(ninjas)

    const ns = ninjas.map( n => {
        return (
            <div key={n.id}>
                <br />
                <div>Name: {n.name}</div>
                <div>Age: {n.age}</div>
            </div>
        )
    })
    console.log(ns)
    return (
        <div>{ns}</div>
    )
}

export default Com2;