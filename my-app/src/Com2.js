import React from 'react';

function Com2( {ninjas} ) {
    console.log("---- Com2 --- ")
    console.log(ninjas)

    const ns = ninjas.map( n => {
        return (
            <div key={n.id}>
                <br />
                <div>Name: {n.name}</div>
                <div>Age: {n.age}</div>
                <div>Belt: {n.belt}</div>
            </div>
        )
    })
    return (
        <div>{ns}</div>
    )
}

export default Com2;