import React, {useState} from 'react';
import s from './Counter.module.css';
import {CounterDisplay} from "./CounterDisplay";
import {CounterButton} from "./CounterButton";
import {SettingsCounterDisplay} from "./SettingsCounterDisplay";


type CounterPropsType = {
    startValue: number
    maxValue: number
    counterState: number
    error: boolean
    setButton: () => void
    setStartValue: (e: number) => void
    setMaxValue: (e: number) => void
    resetCounterState: () => void
    sumOfValues: () => void
}

export type VersionOfCounter = 1.0 | 2.0;

export const Counter = (props: CounterPropsType) => {

    const [version, setVersion] = useState<VersionOfCounter>(1.0);

    const [turnOn, setTurnOn] = useState<boolean>(false);

    const versionOfCounterChangeHandler = () => version === 1.0 ? setVersion(2.0) : setVersion(1.0);

    return (
        <div>
            {
                version === 1.0 &&
                <>
                    <div className={s.flexContainer}>
                        <div className={s.wrapper}>
                            <div className={s.display}>
                                <CounterDisplay maxValue={props.maxValue}
                                                counterState={props.counterState}
                                                error={props.error}
                                                version={version}
                                />
                            </div>
                            <CounterButton title={'addCount'}
                                           callback={props.sumOfValues}
                                           disabled={(props.counterState >= props.maxValue) || (props.error)}
                                           className={(props.counterState >= props.maxValue || (props.error)) ? s.addButtonDisabled : s.addButton}
                            />
                            <CounterButton title={'resetCount'}
                                           callback={props.resetCounterState}
                                           disabled={(props.counterState === props.startValue) || (props.error)}
                                           className={((props.counterState === props.startValue || props.error)) ? s.resetButtonDisabled : s.resetButton}
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
                                           callback={props.setButton}
                                           disabled={props.error}
                                           className={(props.error) ? s.addButtonDisabled : s.addButton}
                            />
                        </div>
                    </div>
                </>
            }
            {
                version === 2.0 &&
                <>
                    <div className={s.flexContainer}>
                        <div className={s.wrapper}>
                            {turnOn || props.error
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
                                : <CounterDisplay counterState={props.counterState}
                                                  maxValue={props.maxValue}
                                                  error={props.error}
                                                  version={version}
                                />
                            }
                            {!turnOn &&
                                <>
                                    <CounterButton title={'addCount'}
                                                   callback={props.sumOfValues}
                                                   disabled={(props.counterState >= props.maxValue) || (props.error)}
                                                   className={(props.counterState >= props.maxValue || (props.error)) ? s.addButtonDisabled : s.addButton}
                                    />
                                    <CounterButton title={'resetCount'}
                                                   callback={props.resetCounterState}
                                                   disabled={(props.counterState === props.startValue) || (props.error)}
                                                   className={(props.counterState === props.startValue || (props.error)) ? s.resetButtonDisabled : s.resetButton}
                                    />
                                </>
                            }
                            <CounterButton title={'Set value'}
                                           callback={props.setButton}
                                           turnOnnSetting={setTurnOn}
                                           turnedOn={turnOn}
                                           disabled={props.error}
                                           className={(props.error) ? s.addButtonDisabled : s.addButton}
                            />
                        </div>
                    </div>
                </>
            }
            <div className={s.flexContainerBtn}>
                <button className={s.changeVersionButton}
                        onClick={versionOfCounterChangeHandler}
                >
                    Change counter
                    Current version: {version}
                </button>
            </div>
        </div>
    );
}