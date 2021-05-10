import React from 'react';
import ReactDOM from 'react-dom';

// import cultclassics from './cultclassics';
export const pickedNumber = (props) => {
    console.log(props.pickOne)
}
// let visibility = true;
export const GiveMeOne = (props) => {
    // let visibility = false;
    // const hideAnswer = () => {

    //     visibility = !visibility
    //     console.log("hahah")
    //     console.log(visibility)
    //     // props.render();

    // }


    return (
        <div>
            {props.cultQuote}
            <br></br>
            <br></br>
            {props.visibility && (props.cultMovie)}

            <br></br>
            <button onClick={(props.pickOne)}>
                Do ya feel lucky? well do ya?!
            </button>
            <button onClick={props.hideAnswer}>{props.visibility ? 'Hide Movie' : 'Reveal Movie'} </button>

            <br></br>
            <button onClick={(props.clearAll)}>So you dont feel lucky?</button>
        </div>
    );
};


