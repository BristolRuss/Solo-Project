import initial from "./initial";

//sets matchesUnderway to true. This will allow the game to proceed to the game section
const matchesUnderway = (state, action) => {
    return {
        ...state,
        matchesUnderway: action.matchesUnderway
    }
}

// These two actions are responsible for increasing the player scores
const player1 = state => { 
    let newArray = [...state.pairings];
    const i = state.currentMatch;
    newArray[i].player1.score = newArray[i].player1.score + 1

    return {
        ...state, 
        pairings: newArray
    }
};

const player2 = state => { 
    let newArray = [...state.pairings];
    const i = state.currentMatch;
    newArray[i].player2.score = newArray[i].player2.score + 1

    return {
        ...state, 
        pairings: newArray
    }
};

// Works out which player is serving during normal play and deuce
const server = state => {
    const i = state.currentMatch;
    const total = state.pairings[i].player1.score + state.pairings[i].player2.score

    if (state.deuce === 1){
        return{
            ...state,
            server: (Math.floor((total) / 2) % 2 + 1),
        }
    }  
	else return {
        ...state,
        server: (Math.floor((total) / state.alternate) % 2 + 1)
    };
}

// This action is doing a LOT of work. Its primary job is to work out if a player has won,
// but it is also updating a lot of other information such as pairings for the next round, resetting information and if
// a player has been eliminated. 
const winner = state => {
    const i = state.currentMatch;
    const player1 = state.pairings[i].player1;
    const player2 = state.pairings[i].player2;

    if (player1.score >= state.target && (player1.score - player2.score) >= 2){
        return{
        ...state,
        player1: (player1.gamesWon = player1.gamesWon + 1, player1.score = 0),
        player2: player2.eliminated = true,
        deuce: 0,
        server: 1,
        semiFinals: [...state.semiFinals, player1],
        final: state.roundsCompleted === 2 ? [...state.final, player1] : [...state.final],
        currentMatch: state.currentMatch < state.pairings.length -1 ? state.currentMatch + 1: state.currentMatch,
        roundsCompleted: state.currentMatch === state.pairings.length - 1 ? state.roundsCompleted + 1: state.roundsCompleted
        }
    }
    if (player2.score >= state.target && (player2.score - player1.score) >= 2){
        return{
        ...state,
        player2: (player2.gamesWon = player2.gamesWon + 1, player2.score = 0),
        player1: player1.eliminated = true,
        deuce: 0,
        server: 1,
        semiFinals: [...state.semiFinals, player2],
        final: state.roundsCompleted === 2 ? [...state.final, player2] : [...state.final],
        currentMatch: state.currentMatch < state.pairings.length - 1 ? state.currentMatch + 1: state.currentMatch,
        roundsCompleted: state.currentMatch === state.pairings.length - 1 ? state.roundsCompleted + 1: state.roundsCompleted
        }
    }

    //works out if the game needs to go to deuce. This is for the serving mechanic
    if (player1.score >= state.target -1 && player2.score >= state.target - 1){
        return{
            ...state,
            deuce: 1
        }
    }
    else return state
}

//Adds player object to the game and gives them the required properties
const addPlayer = (state, action) => {
    return {
        ...state,
        players: [
            ...state.players,
            {
                name: action.name,
                gamesWon: 0,
                eliminated: false,
                score: 0
            }
        ]
    }
}

//Takes the randomised player array and sorts them into pairs. 
const quarterFinals = (state) => {
    const players = state.players;
    const quarterFinals = [];

    quarterFinals[0] = {player1:players[0], player2:players[1]}
    quarterFinals[1] = {player1:players[2], player2:players[3]}
    quarterFinals[2] = {player1:players[4], player2:players[5]}
    quarterFinals[3] = {player1:players[6], player2:players[7]}

    return {
        ...state,
        pairings: quarterFinals
    }
}

//Takes the winners from the previous rounds and sorts them into pairs.
const semiFinals = (state) => {
    const players = state.semiFinals;
    const semiFinals = [];

    semiFinals[0] = {player1:players[0], player2:players[1]}
    semiFinals[1] = {player1:players[2], player2:players[3]}

    return {
        ...state,
        currentMatch: 0,
        roundsCompleted: 2,
        pairings: semiFinals
    }
}

const Final = (state) => {
    const players = state.final;
    const final = [];

    final[0] = {player1:players[0], player2:players[1]}

    return {
        ...state,
        currentMatch: 0,
        roundsCompleted: 4,
        pairings: final
    }
}

//Once all players have been added this will randomise the order. The user can them randomise further if required 
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
        case "PLAYER1SCORES": return winner(server(player1(state)));
        case "PLAYER2SCORES": return winner(server(player2(state)));
        case "RANDOMISE" : return randomise(state);
        case "MATCHES_UNDERWAY" : return matchesUnderway(state, action);
        case "SEMI_FINALS" : return semiFinals(state);
        case "FINAL" : return Final(state);
        case "QUARTER_FINALS" : return quarterFinals(state);
        case "SAVE_SETTINGS" : return saveSettings(state, action);
        case "CLEAR" : return initial;
        default: return state;
    }
};

export default reducer;