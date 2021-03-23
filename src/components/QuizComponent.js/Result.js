import React from 'react';

const Result=({score,playAgain})=>{

    return(
        <div className="score-board">
            <div className="score"> You scored {score}/5 correct answers!</div>
            <button id="btn" className="playBtn" onClick={playAgain}>Play Again</button>
        </div>
    );
}

export default Result;