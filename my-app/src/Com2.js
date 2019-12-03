import React from 'react';

function Com2(props) {
    console.log(props);
    const { name, age, belt } = props
    return (
        <div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Belt: {belt}</div>
        </div>
    )
}

export default Com2;