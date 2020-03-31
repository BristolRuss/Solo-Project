import React, { useState } from 'react';

const Players = ({players, handleAddPlayer, handleRandomise}) => {
    const [ name, setName ] = useState('');

    const handleAddToPlayers = (e) => {
        setName(e.currentTarget.value)
    }
   
    // Adds player to state. Once all players have been added it will randomise the data
    const handleSubmit = (e) => {
        if (players.length < 7){
            e.preventDefault();
            handleAddPlayer(name);
            setName('')
        }
        else {
            e.preventDefault();
            handleAddPlayer(name);
            randomise();
        }
    }

    // Randomises players
    const randomise = () => {
        handleRandomise();
    };

    return(
        <>
            {/* This section displays until all players have been added */}
            {players.length < 8 ?
            <section className = "players">
                <h2>Please enter 8 players</h2>
                <p>There are currently {players.length} players added</p>
            
                <form onSubmit = { handleSubmit } className = "form-group">
                    <label htmlFor="addName">Player {players.length + 1} name</label>
                    <input id="addName" onChange = {handleAddToPlayers} value={name} className="form-control"></input>
                    <button className="btn btn-primary">Add</button>
                </form>
            </section>
            : undefined}
            {/* This table displays after the first player has been added */}
            {players.length >= 1 ? 
            <table style={{textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>Player No.</th>
                        <th>Name</th>
                        <th>Games Won</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) =>
                    <tr key= {index}>
                        <td>{index + 1}</td>
                        <td>{player.name}</td>
                        <td>{player.gamesWon}</td>
                    </tr>)}
                </tbody>
            </table>
            :
            undefined}
            {players.length >= 8 ?
            <nav>
                <button onClick={randomise} className="btn btn-primary">Randomise</button>
                <button className="btn btn-primary">Proceed To Games</button>
            </nav>
            :
            undefined}
        </>
    )
};

export default Players;