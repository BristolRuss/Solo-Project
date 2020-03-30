import React from 'react';

const Header = ({reset}) => {
    const handleReset = () => {
        reset()
    }

    return (
        <>
            <header className="App-header">
                <h1>Ping Pong Tournament</h1>
            </header>
            <button className = "btn btn-primary resetButton" onClick = {handleReset}>Reset</button>
        </>
    );
}

export default Header;