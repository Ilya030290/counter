import {AppStateType} from "./store";

export const loadState = () => {
    try {
        const counterState = localStorage.getItem('set Values');
        if (counterState === null) {
            return undefined;
        }
        return JSON.parse(counterState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: { counter: { startValue: number, maxValue: number, currentValue: number } | AppStateType }) => {
    try {
        const counterState = JSON.stringify(state.counter);
        localStorage.setItem('set Values', counterState);
    } catch {
        // ignore write errors
    }
};