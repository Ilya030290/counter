import React from 'react';
import s from "./Counter.module.css";
import {VersionOfCounter} from "./Counter";

type CounterDisplayPropsType = {
    maxValue: number
    counterState: number
    error?: boolean
    version: VersionOfCounter
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {


    return (
        <div className={s.classDiv}>
            {!props.error
                ? <div className={`${props.counterState === props.maxValue ? s.maxCount : s.notMaxCount} ${s.class}`}><p>{props.counterState}</p></div>
                : <span className={s.errorDisplay}> incorrect input value </span>
            }
        </div>
    );
};

