import React from 'react';
import s from './Counter.module.css'

type CounterButtonsPropsType = {
    onClickInc: () => void
    onClickReset: () => void
    disabledInc: boolean
    disabledReset: boolean
}

export const CounterButtons = (props: CounterButtonsPropsType) => {

    const onClickIncHandler = () => props.onClickInc()
    const onclickResetHandler = () => props.onClickReset()

    return (
        <div className={s.counterButtons}>
            <span className={s.counterButton}>
                <button className={s.incButton}
                        onClick={onClickIncHandler}
                        disabled={props.disabledInc}>
                    inc
                </button>
            </span>
            <span className={s.counterButton}>
                <button className={s.incButton}
                        onClick={onclickResetHandler}
                        disabled={props.disabledReset}>
                    reset
                </button>
            </span>
        </div>
    );
};

