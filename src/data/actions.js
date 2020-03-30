export const clear = () => {
    return {
        type: "CLEAR"
    }
}

export const save = (aim, switchOn) => {
    return {
        type: "SAVE_SETTINGS",
        target: +aim,
        alternate: +switchOn
    }
}