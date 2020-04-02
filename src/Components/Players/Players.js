import React, { useState } from 'react';
import PlayerTable from '../PlayerTable'

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
                <form onSubmit = { handleSubmit } className = "form-group">
                    <label htmlFor="addName">Player {players.length + 1} name</label>
                    <input id="addName" onChange = {handleAddToPlayers} value={name} className="form-control"></input>
                    <button className="btn btn-primary">Add</button>
                </form>
            </section>
            : undefined}
            <PlayerTable />
        </>
    )
};

export default Players;