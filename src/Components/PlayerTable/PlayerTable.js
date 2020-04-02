import React from 'react';
import { Link } from 'react-router-dom';

const PlayerTable = ({players, handleRandomise, handleQF}) => {

    // Randomises players
    const randomise = () => {
        handleRandomise();
    };

    const QF = () => {
        handleQF();
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
                    <button onClick={randomise} className="btn btn-primary">Randomise</button>
                    <Link to = "/matches"><button onClick = {QF} className="btn btn-primary">Proceed To Games</button></Link>
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