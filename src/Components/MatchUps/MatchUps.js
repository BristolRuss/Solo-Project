import React from 'react';

const MatchUps = ({players, quarterFinals}) => {

    return (
        <>
            <section className="games">
                {quarterFinals.map((match, index) =>
                    <div className="matchUps" key={index}>
                        <h1>Match {index + 1}</h1>
                        <h2 
                        style = {{textDecoration: match[0].gamesWon === "eliminated" ? 'line-through' : undefined}}>
                            {match[0].name}</h2> 
                        Vs 
                        <h2 style = {{textDecoration: match[1].gamesWon === "eliminated" ? 'line-through' : undefined}}>
                            {match[1].name}</h2>
                    </div>
                )}
            </section>
            <section>
                
            </section>
        </>
    )
}

export default MatchUps;