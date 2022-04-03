import React from 'react';
import s from "./Counter.module.css";

type CounterHeaderPropsType = {
    counterState: number
}


export const CounterHeader = (props: CounterHeaderPropsType) => {

    const classNameForCounterHeader = props.counterState < 5 ? s.counterHeader : s.counterHeaderRed

    return (
        <div className={classNameForCounterHeader}>
            {props.counterState}
        </div>
    );
};

