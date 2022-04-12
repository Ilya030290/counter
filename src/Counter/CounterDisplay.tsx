import React from 'react';
import s from "./Counter.module.css";
import {EditModeType} from "../redux/counter-reducer";

type CounterDisplayPropsType = {
    maxValue: number
    currentValue: number
    error?: boolean
    editMode: EditModeType
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {


    return (
        <div className={s.classDiv}>
            {!props.error
                ? <div className={`${props.currentValue === props.maxValue ? s.maxCount : s.notMaxCount} ${s.class}`}><p>{props.currentValue}</p></div>
                : <span className={s.errorDisplay}> incorrect input value </span>
            }
        </div>
    );
};

