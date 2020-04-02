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

const quarterFinals = (state) => {
    const players = state.players;
    const pairings = [];

    pairings[0] = [players[0], players[1]]
    pairings[1] = [players[2], players[3]]
    pairings[2] = [players[4], players[5]]
    pairings[3] = [players[6], players[7]]

    return {
        ...state,
        quarterFinals: pairings
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
        case "QUARTER_FINALS" : return quarterFinals(state);
        case "SAVE_SETTINGS" : return saveSettings(state, action);
        case "CLEAR" : return initial;
        default: return state;
    }
};

export default reducer;