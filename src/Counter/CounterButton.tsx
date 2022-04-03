import React from 'react';

type CounterButtonPropsType = {
    title: string
    callback: () => void
    disabled?: boolean
    className?:string
    turnOnnSetting?:(on:boolean) => void
    turnedOn?:boolean
}

export const CounterButton = (props: CounterButtonPropsType) => {

    const onClickHandler = () => {
        props.turnOnnSetting && props.turnOnnSetting(!props.turnedOn);
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

