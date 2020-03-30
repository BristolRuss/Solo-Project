import React, { useState } from 'react';

const Settings = ({target, alternate, handleFormSubmit}) => {
    const [ aim, setAim ] = useState(`${target}`);
    const [ switchOn, setSwitchOn ] = useState(`${alternate}`);

    const handleTarget = (e) => {
        setAim(e.currentTarget.value)
    }

    const handleAlternate = (e) => {
        setSwitchOn(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleFormSubmit(aim, switchOn)
    }

    return (
        <>
            <h3>Settings</h3>
            <form onSubmit = { handleSubmit } className = "settingsForm">
                <div className = "form-group">
                    <label>Winning Score</label>
                    <input onChange = {handleTarget} value = {aim} type = "number" className="form-control"></input>
                    <label>Alternate Every</label>
                    <input onChange = {handleAlternate} value = {switchOn} type = "number" className="form-control"></input>
                    <button className = "btn btn-dark">Save Settings</button>
                </div>
            </form>
        </> 
    )
};

export default Settings;