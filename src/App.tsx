import React, {useEffect, useState} from 'react';
import  './App.css'
import {Counter} from "./Counter/Counter";


export const App = () => {

    const incrValue = 1;

    //Values, error, counterState and functions to set start and max values

    const [value, setValue] = useState({
        startValue: Number(localStorage.getItem('startValue')),
        maxValue: Number(localStorage.getItem('maxValue'))
    });

    const [counterState, setCounterState] = useState<number>(Number(localStorage.getItem('startValue')));

    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if ((value.startValue >= value.maxValue) || (value.startValue < 0) || (value.maxValue < 0)) {
            setError(true);
        } else {
            setError(false);
        }
    }, [value]);

    const setStartValue = (newStartValue: number) => {
        setValue({...value, startValue: newStartValue});
    }

    const setMaxValue = (newMaxValue: number) => {
        setValue({...value, maxValue: newMaxValue});
    }

    const setButton = () => {
        localStorage.setItem("startValue", value.startValue.toString())
        localStorage.setItem("MaxValue", value.maxValue.toString())
        setCounterState(Number(localStorage.getItem("startValue")))
    }

    const resetCounterState = () => {
        setCounterState(value.startValue);
    }

    const sumOfValues = () => {
        if (counterState < value.maxValue) {
            setCounterState(counterState + incrValue);
        }
    }
    return (
        <Counter startValue={value.startValue}
                 maxValue={value.maxValue}
                 counterState={counterState}
                 error={error}
                 setButton={setButton}
                 setStartValue={setStartValue}
                 setMaxValue={setMaxValue}
                 resetCounterState={resetCounterState}
                 sumOfValues={sumOfValues}
        />
    );
};




