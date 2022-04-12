import React from 'react';
import './App.css'
import {Counter} from "./Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
    CounterStateType,
    EditModeType,
    changeCurrentCounterValueAC,
    incCounterValueAC,
    resetCounterValueAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    changeEditModeAC,
    changeTurnOnAC
} from "./redux/counter-reducer";


export const App = () => {

    let {
        startValue,
        maxValue,
        currentValue,
        error,
        editMode,
        turnOn
    } = useSelector<AppStateType, CounterStateType>(state => state.counter);

    const dispatch = useDispatch();


    const setStartValue = (newStartValue: number) => {
        dispatch(setStartValueAC(newStartValue));
        if(newStartValue < 0 || newStartValue >= maxValue) {
            return dispatch(setErrorAC(true));
        }
        if (maxValue >= 0) {
            return dispatch(setErrorAC(false));
        }

    }

    const setMaxValue = (newMaxValue: number) => {
        dispatch(setMaxValueAC(newMaxValue));
        if(newMaxValue < 0 || newMaxValue <= startValue) {
            return dispatch(setErrorAC(true));
        }
        if(newMaxValue >= 0) {
            return dispatch(setErrorAC(false));
        }
    }

    const setValue = () => {
        dispatch(changeCurrentCounterValueAC(startValue));
    }

    const resetCurrentValue = () => {
        dispatch(resetCounterValueAC(startValue));
    }

    const incrCurrentValue = () => {
        if (currentValue < maxValue) {
            dispatch(incCounterValueAC());
        }
    }

    const changeEditMode = (editMode: EditModeType) => {
        dispatch(changeEditModeAC(editMode));
    }

    const changeTurnOn = (turnOn: boolean) => {
        dispatch(changeTurnOnAC(turnOn));
    }

    return (
        <Counter startValue={startValue}
                 maxValue={maxValue}
                 currentValue={currentValue}
                 error={error}
                 setValue={setValue}
                 setStartValue={setStartValue}
                 setMaxValue={setMaxValue}
                 resetCurrentValue={resetCurrentValue}
                 incrCurrentValue={incrCurrentValue}
                 editMode={editMode}
                 changeEditMode={changeEditMode}
                 turnOn={turnOn}
                 changeTurnOn={changeTurnOn}
        />
    );
};




