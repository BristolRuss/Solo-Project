import React from 'react';
import Player1 from '../Player1';
import Player2 from '../Player2';

const MatchUps = ({pairings, handleSemiFinals, handleFinal, roundsCompleted, currentMatch}) => {

    const semis = () => {
        handleSemiFinals();
    }

    const final = () => {
        handleFinal();
    }

    return (
        <>
            <section className="games">
                {pairings.map((match, index) =>
                    <div className={index === currentMatch && roundsCompleted !== 5 ? "selected matchUps" : "matchUps"} key={index}>
                        <h1>Match {index + 1}</h1>
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
            <div className="imageLocation row mb-4">
                <Player1 />
                <Player2 />
            </div> 
            }
            {roundsCompleted === 5 ?
                <h1 className="matchUps">Congratulations! Your champion is {pairings[0].player1.gamesWon === 3 ? pairings[0].player1.name : pairings[0].player2.name}!</h1> :
                undefined
            }
            {roundsCompleted === 1 ? <button className = "proceed btn btn-secondary" onClick = {semis}>Proceed to Semi Finals</button> : undefined}
            {roundsCompleted === 3 ? <button className = "proceed btn btn-secondary" onClick = {final}>Proceed to Final</button> : undefined}
        </>
    )
}

export default MatchUps;