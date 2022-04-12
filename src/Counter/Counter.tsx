import React from 'react';
import s from './Counter.module.css';
import {CounterDisplay} from "./CounterDisplay";
import {CounterButton} from "./CounterButton";
import {SettingsCounterDisplay} from "./SettingsCounterDisplay";
import {EditModeType} from "../redux/counter-reducer";


type CounterPropsType = {
    startValue: number
    maxValue: number
    currentValue: number
    error: boolean
    setValue: () => void
    setStartValue: (e: number) => void
    setMaxValue: (e: number) => void
    resetCurrentValue: () => void
    incrCurrentValue: () => void
    editMode: EditModeType
    changeEditMode: (editMode: EditModeType) => void
    turnOn: boolean
    changeTurnOn: (turnOn: boolean) => void
}


export const Counter = (props: CounterPropsType) => {

    const onChangeEditModeHandler = () => props.editMode === 1.0 ? props.changeEditMode(2.0) : props.changeEditMode(1.0);

    return (
        <div>
            {
                props.editMode === 1.0 &&
                <>
                    <div className={s.flexContainer}>
                        <div className={s.wrapper}>
                            <div className={s.display}>
                                <CounterDisplay maxValue={props.maxValue}
                                                currentValue={props.currentValue}
                                                error={props.error}
                                                editMode={props.editMode}
                                />
                            </div>
                            <CounterButton title={'addCount'}
                                           callback={props.incrCurrentValue}
                                           disabled={(props.currentValue >= props.maxValue) || (props.error)}
                                           className={(props.currentValue >= props.maxValue || (props.error)) ? s.addButtonDisabled : s.addButton}
                            />
                            <CounterButton title={'resetCount'}
                                           callback={props.resetCurrentValue}
                                           disabled={(props.currentValue === props.startValue) || (props.error)}
                                           className={((props.currentValue === props.startValue || props.error)) ? s.resetButtonDisabled : s.resetButton}
                            />
                        </div>
                        <div className={s.wrapper2}>
                            <div className={s.display}>
                                <SettingsCounterDisplay startValue={props.startValue}
                                                        maxValue={props.maxValue}
                                                        setStartValue={props.setStartValue}
                                                        setMaxValue={props.setMaxValue}
                                />
                            </div>
                            <CounterButton title={'Set value'}
                                           callback={props.setValue}
                                           disabled={props.error}
                                           className={(props.error) ? s.addButtonDisabled : s.addButton}
                            />
                        </div>
                    </div>
                </>
            }
            {
                props.editMode === 2.0 &&
                <>
                    <div className={s.flexContainer}>
                        <div className={s.wrapper}>
                            {props.turnOn || props.error
                                ? <>
                                    <div className={s.display}>
                                        <SettingsCounterDisplay startValue={props.startValue}
                                                                maxValue={props.maxValue}
                                                                setStartValue={props.setStartValue}
                                                                setMaxValue={props.setMaxValue}
                                        />
                                    </div>
                                    {props.error && <span className={s.errorSpan}>INCORRECT VALUE!</span>}
                                </>
                                : <CounterDisplay currentValue={props.currentValue}
                                                  maxValue={props.maxValue}
                                                  error={props.error}
                                                  editMode={props.editMode}
                                />
                            }
                            {!props.turnOn &&
                                <>
                                    <CounterButton title={'addCount'}
                                                   callback={props.incrCurrentValue}
                                                   disabled={(props.currentValue >= props.maxValue) || (props.error)}
                                                   className={(props.currentValue >= props.maxValue || (props.error)) ? s.addButtonDisabled : s.addButton}
                                    />
                                    <CounterButton title={'resetCount'}
                                                   callback={props.resetCurrentValue}
                                                   disabled={(props.currentValue === props.startValue) || (props.error)}
                                                   className={(props.currentValue === props.startValue || (props.error)) ? s.resetButtonDisabled : s.resetButton}
                                    />
                                </>
                            }
                            <CounterButton title={'Set value'}
                                           callback={props.setValue}
                                           changeTurnOn={props.changeTurnOn}
                                           turnOn={props.turnOn}
                                           disabled={props.error}
                                           className={(props.error) ? s.addButtonDisabled : s.addButton}
                            />
                        </div>
                    </div>
                </>
            }
            <div className={s.flexContainerBtn}>
                <button className={s.changeVersionButton}
                        onClick={onChangeEditModeHandler}
                >
                    Change counter
                    Current version: {props.editMode}
                </button>
            </div>
        </div>
    );
}