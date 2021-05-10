import React from 'react';
import { pickedNumber } from './givemeone'

const Cultclassic = (props) => {
    return (
        <div>
            {console.log(props.Cultclassics.quotes)}
            <button onClick={props.test}> TEST </button>
        </div>)
}

export default Cultclassic;