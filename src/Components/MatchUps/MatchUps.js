import React from 'react';
import Player1 from '../Player1';
import Player2 from '../Player2';

const MatchUps = ({pairings, deuce, handleSemiFinals, handleFinal, roundsCompleted, currentMatch}) => {

    // these two actions will sort pairings for the later rounds
    const semis = () => {
        handleSemiFinals();
    }

    const final = () => {
        handleFinal();
    }

    return (
        <>  
        {/* displays confetti when a winner has been crowned */}
            {roundsCompleted === 5  ?
            <div className="container">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
            </div>
            :
            undefined
            }
            <section className="games">
                {pairings.map((match, index) =>
                    <div className={index === currentMatch && roundsCompleted !== 5 ? "selected matchUps" : "matchUps"} key={index}>
                        <h1>{roundsCompleted === 4 || roundsCompleted === 5 ? "Final" : roundsCompleted === 2 || roundsCompleted === 3 ? `Semi-Final ${index + 1} `: `Match ${index + 1}`}</h1>
                        <h2 
                        style = {{textDecoration: match.player1.eliminated === true ? 'line-through' : undefined}}>
                            {match.player1.name}</h2> 
                        Vs 
                        <h2 style = {{textDecoration: match.player2.eliminated === true ? 'line-through' : undefined}}>
                            {match.player2.name}</h2>
                    </div>
                )}
            </section>
            {roundsCompleted === 1 || roundsCompleted === 3 || roundsCompleted === 5 ?
            undefined :
            // two player scoring components
            <>
                <div className="imageLocation row mb-4">
                    <Player1 />
                    <Player2 />
                </div>
                {deuce === 1 ? <h2 className="alert alert-warning">Deuce!</h2> : null} 
            </>
            }
            {/* buttons will be displayed when appropriate */}
            {roundsCompleted === 1 ? <button className = "proceed btn btn-dark" onClick = {semis}>Proceed to Semi Finals</button> : undefined}
            {roundsCompleted === 3 ? <button className = "proceed btn btn-dark" onClick = {final}>Proceed to Final</button> : undefined}
            {/* displays the winner message once a winner has been crowned */}
            {roundsCompleted === 5 ?
                <h1 className="matchUps">Congratulations! Your champion is {pairings[0].player1.gamesWon === 3 ? pairings[0].player1.name : pairings[0].player2.name}!</h1>
            :
                undefined
            }
        </>
    )
}

export default MatchUps;