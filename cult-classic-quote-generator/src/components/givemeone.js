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
            <div className='content'>
            <p id='quote'> {props.cultQuote}</p>
            <br></br>
                <br></br>

                {/* the line below allows us to use repeatable animations in css,
                by rendering element and assigning the id everytime the elemnt is clicked */}

                {props.visibility && <p id='movie'>{props.cultMovie}</p>}

                {/* in comparision the line below does not allow for this, that is because the div and the paragraph
                is already rendered and has an id. As opposed to rendering it when a true - true condition (&&) is met   */}

                {/* <p id='movie' >{props.visibility && (props.cultMovie)}</p> */}
             
             
            </div>
            <br></br>
            <div className='controls'>
            <button className='controls_btn' id='pickOneBtn' onClick={(props.pickOne)}>
                Do ya feel lucky? well do ya?!
            </button>
            <button className='controls_btn' id='revealMovieBtn' onClick={props.hideAnswer}>{props.visibility ? 'Hide Movie' : 'Reveal Movie'} </button>

            <br></br>
                <button className='controls_btn' id='clearAllBtn' onClick={(props.clearAll)}>So you dont feel lucky?</button>
            </div>
        </div>
    );
};


