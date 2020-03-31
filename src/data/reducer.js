import initial from "./initial";    

const addPlayer = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players,
            {
                name: action.name,
                gamesWon: 0
            }
        ]
    }
}

const randomise = (state) => {
    const newState = {
        ...state,
    }
    newState.players.sort(function() { return 0.5 - Math.random() });

    return newState;
}

const saveSettings = (state, action) => {
    return {
        ...state,
        target: action.target,
        alternate: action.alternate,
        settingsSaved: true
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER" : return addPlayer(state, action);
        case "RANDOMISE" : return randomise(state);
        case "SAVE_SETTINGS" : return saveSettings(state, action);
        case "CLEAR" : return initial;
        default: return state;
    }
};

export default reducer;