import React from 'react';

const Header = ({reset}) => {
    const handleReset = () => {
        reset()
    }

    return (
        <>
            <header className="App-header">
                <h1 className="header">Ping Pong Tournament</h1>
            </header>
            <button className = "btn btn-danger resetButton" onClick = {handleReset}>Reset</button>
        </>
    );
}

export default Header;