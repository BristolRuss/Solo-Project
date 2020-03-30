import initial from "./initial";

const reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR" : return initial;
        case "SAVE_SETTINGS" : return {
            ...state,
            target: action.target,
            alternate: action.alternate,
            settingsSaved: true
        }
        default: return state;
    }
};

export default reducer;