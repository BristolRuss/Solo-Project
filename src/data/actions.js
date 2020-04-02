export const addPlayer = (name) => {
    return {
        type: "ADD_PLAYER",
        name: name
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}

export const randomise = () => {
    return {
        type: "RANDOMISE"
    }
}

export const quarterFinals = () => {
    return {
        type: "QUARTER_FINALS"
    }
}

export const save = (aim, switchOn) => {
    return {
        type: "SAVE_SETTINGS",
        target: +aim,
        alternate: +switchOn
    }
}