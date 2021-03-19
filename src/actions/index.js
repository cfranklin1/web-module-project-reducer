export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_VALUE = "SET_MEMORY_VALUE";
export const SET_TOTAL_VALUE = "SET_TOTAL_VALUE";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const applyOperator = (operator) => {
    return ({type:CHANGE_OPERATION, payload: operator})
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY})
}

export const memoryValue = () => {
    return ({type:SET_MEMORY_VALUE})
}
export const totalValue = () => {
    return ({type:SET_TOTAL_VALUE})
}

export const clearMemory = () => {
    return ({type:CLEAR_MEMORY})
}