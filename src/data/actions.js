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

export const handleIncrement1 = () => {
    return {
        type: "PLAYER1SCORES"
    }
}

export const handleIncrement2 = () => {
    return {
        type: "PLAYER2SCORES"
    }
}

export const quarterFinals = () => {
    return {
        type: "QUARTER_FINALS"
    }
}

export const semiFinals = () => {
    return {
        type: "SEMI_FINALS"
    }
}

export const Final = () => {
    return {
        type: "FINAL"
    }
}

export const save = (aim, switchOn) => {
    return {
        type: "SAVE_SETTINGS",
        target: +aim,
        alternate: +switchOn
    }
}