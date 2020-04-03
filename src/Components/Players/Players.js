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
            
            <section className = "players">
                {players.length < 8 ?      
                <form onSubmit = { handleSubmit } className = "form-group">
                    <h2>Please enter 8 players</h2>  
                    <label htmlFor="addName">Player {players.length + 1} name</label>
                    <input id="addName" onChange = {handleAddToPlayers} value={name} className="form-control" required></input>
                    <button className="btn btn-primary">Add</button>
                </form>
                : undefined}
                <PlayerTable />
            </section>
        </>
    )
};

export default Players;