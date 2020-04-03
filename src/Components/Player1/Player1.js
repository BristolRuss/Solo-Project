import React from 'react';

const Player1 = ({server, handleIncrement1, winner, currentMatch, pairings}) =>  (
<div className="col-md-6 mt-4">
    <div className= {server === 1 ? "card text-center bg-dark text-white" : "card text-center text-dark" }>
        <h5 className="card-header">{pairings[currentMatch].player1.name}</h5>
        <div className="card-body">
            <p className="card-text display-1">{pairings[currentMatch].player1.score}</p>
        </div>
        <div className="card-footer">
            <button  onClick = {winner === 0 ? handleIncrement1 : null} className="form-control btn btn-success">+</button>
        </div>
    </div>
</div>  
       
)

export default Player1;