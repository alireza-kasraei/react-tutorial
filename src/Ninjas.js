import React from 'react';

const Ninjas = (props) => {
    const {ninjas} = props;
    const list = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name} </div>
                <div>Age: {ninja.age} </div>
                <div>Belt: {ninja.belt} </div>
                <div><button onClick={() => {props.handleDelete(ninja.id)}}>X</button></div>
            </div>
        );
    });


    return (
        <div className="ninja-list">
            {list}
        </div>
    );

}

export default Ninjas;