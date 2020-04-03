import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({reset}) => {
    const handleReset = () => {
        reset()
    }

    return (
        <>
            <header className="App-header">
                <h1 className="header">Ping Pong Tournament</h1>
            </header>
            <Link to = "/"><button className = "btn btn-primary resetButton" onClick = {handleReset}>Reset</button></Link>
        </>
    );
}

export default Header;