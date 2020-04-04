import React, { useState } from 'react';
import PlayerTable from '../PlayerTable';

const Players = ({players, handleAddPlayer, handleRandomise, addToQF, pairings}) => {
    const [ name, setName ] = useState('');

    const handleAddToPlayers = (e) => {
        setName(e.currentTarget.value)
    }
   
    // Adds player to state. Once all players have been added it will randomise the data and so initial pairings
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
            addToQF();
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
                    <button className="btn btn-dark">Add</button>
                </form>
                : undefined}
                <PlayerTable />
                {/* once all players have been added this will display the potential matchups.
                the user can either go with the selected or randomise again until happy */}
                {players.length === 8 ?
                    <div>
                        {pairings.map((match, index) =>
                        <div className="matchPreview" key= {index}>
                            <h2>Match {index + 1}</h2>
                            <h4>
                                {match.player1.name}
                            </h4> 
                            Vs 
                            <h4>
                                {match.player2.name}
                            </h4>
                        </div>)}
                    </div>
                :
                undefined
                }
            </section>
        </>
    )
};

export default Players;