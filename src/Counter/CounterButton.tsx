import React from 'react';

type CounterButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
    className?:string
    changeTurnOn?: (turnOn: boolean) => void
    turnOn?: boolean
}

export const CounterButton = (props: CounterButtonPropsType) => {

    const onClickHandler = () => {
        props.changeTurnOn && props.changeTurnOn(!props.turnOn);
        props.callback();
    }

    return (
        <button
            onClick={onClickHandler}
            disabled={props.disabled}
            className={props.className}
        >
            {props.title}
        </button>
    );
};

