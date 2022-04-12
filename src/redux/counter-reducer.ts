export type EditModeType = 1.0 | 2.0;

export type CounterStateType = {
    startValue: number
    maxValue: number
    currentValue: number
    error: boolean
    editMode: EditModeType
    turnOn: boolean
}

const initialState: CounterStateType = {
    startValue: 0,
    maxValue: 0,
    currentValue: 0,
    error: false,
    editMode: 1.0,
    turnOn: false
}

export type IncCounterValueActionType = {
    type: 'INC-COUNTER-VALUE'
}

export type ResetCounterValueActionType = {
    type: 'RESET-COUNTER-VALUE'
    currentValue: number
}

export type ChangeCurrentCounterValueActionType = {
    type: 'CHANGE-CURRENT-COUNTER-VALUE',
    currentValue: number
}

export type SetStartValueActionType = {
    type: 'SET-START-VALUE',
    startValue: number
}

export type SetMaxValueActionType = {
    type: 'SET-MAX-VALUE'
    maxValue: number
}

export type SetErrorActionType = {
    type: 'SET-ERROR'
    error: boolean
}

export type ChangeEditModeActionType = {
    type: 'CHANGE-EDIT-MODE'
    editMode: EditModeType
}

export type ChangeTurnOnActionType = {
    type: 'CHANGE-TURN-ON'
    turnOn: boolean
}


export type ActionsType = IncCounterValueActionType
    | SetStartValueActionType
    | SetMaxValueActionType
    | ResetCounterValueActionType
    | ChangeCurrentCounterValueActionType
    | SetErrorActionType
    | ChangeEditModeActionType
    | ChangeTurnOnActionType

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case "INC-COUNTER-VALUE":
            return {...state, currentValue: state.currentValue + 1};
        case "RESET-COUNTER-VALUE":
            return {...state, currentValue: action.currentValue};
        case "CHANGE-CURRENT-COUNTER-VALUE":
            return {...state, currentValue: action.currentValue};
        case "SET-START-VALUE":
            return {...state, startValue: action.startValue};
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue};
        case "SET-ERROR":
            return {...state, error: action.error};
        case "CHANGE-EDIT-MODE":
            return {...state, editMode: action.editMode};
        case "CHANGE-TURN-ON":
            return {...state, turnOn: action.turnOn};
        default:
            return state;
    }
}

export const incCounterValueAC = () => ({type: 'INC-COUNTER-VALUE'});
export const resetCounterValueAC = (resetValue: number) =>
    ({type: 'RESET-COUNTER-VALUE', currentValue: resetValue});
export const changeCurrentCounterValueAC = (startValue: number) =>
    ({type: 'CHANGE-CURRENT-COUNTER-VALUE', currentValue: startValue});
export const setStartValueAC = (startValue: number) =>
    ({type: 'SET-START-VALUE', startValue: startValue});
export const setMaxValueAC = (maxValue: number) =>
    ({type: 'SET-MAX-VALUE', maxValue: maxValue});
export const setErrorAC = (error: boolean) => ({type: 'SET-ERROR', error: error});
export  const changeEditModeAC = (editMode: EditModeType) => ({type: 'CHANGE-EDIT-MODE', editMode: editMode});
export  const changeTurnOnAC = (turnOn: boolean) => ({type: 'CHANGE-TURN-ON', turnOn: turnOn});

