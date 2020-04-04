import React from 'react';

const PlayerTable = ({players, handleRandomise, handleQF, proceedMatches}) => {

    // Randomises players and changes the matchups
    const randomise = () => {
        handleRandomise();
        handleQF();
    };

    const handleMatches = () => {
        proceedMatches(true);
    }

    return (
        <>
            {/* This table displays after the first player has been added */}
            {players.length >= 1 ? 
            <section className="tableWrapper">
                <h1>Players</h1>
                <table className="playerTable">
                    <tbody>
                        {players.map((player, index) =>
                        <tr key= {index}>
                            <td className="playerInfo">Player {index + 1}</td>
                            <td>{player.name}</td>
                        </tr>)}
                    </tbody>
                </table>
                {/* These buttons will display once all players have been added. The user 
                can then randomise the table further, or proceed to the games. */}
                {players.length >= 8 ?
                <nav className="tableButtons">
                    <button onClick={randomise} className="btn btn-dark">Randomise Again</button>
                    <button onClick={handleMatches} className="btn btn-dark">Proceed To Games</button>
                </nav>
                :
                undefined}
            </section>
            :
            undefined}
        </>
    )
}

export default PlayerTable;