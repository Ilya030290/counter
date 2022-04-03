import React, {useEffect, useState} from 'react';
import s from './App.module.css'


export const App = () => {

    let [value, setValue] = useState<number>(0)

    const incHandler = () => setValue(++value)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    return (
        <div className={s.localStorageClass}>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
};




