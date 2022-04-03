import React, {ChangeEvent} from 'react';

type SettingsCounterDisplayType = {
    startValue: number
    maxValue: number
    setStartValue: (e: number) => void
    setMaxValue: (e: number) => void
}

export const SettingsCounterDisplay = (props: SettingsCounterDisplayType) => {

    const onChangeStartValueHandle = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }

    const onChangeMaxValueHandle = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    return (
        <div>
            <div style={{paddingTop: '20px'}}>
                max Value
                <input type="number" onChange={onChangeMaxValueHandle} value={props.maxValue.toString()}/>
            </div>
            <div style={{paddingTop: '20px'}}>
                start Value
                <input type="number" onChange={onChangeStartValueHandle} value={props.startValue.toString()}/>
            </div>
        </div>
    );
};