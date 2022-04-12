import {createStore, combineReducers} from 'redux';
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counter: {
            startValue: store.getState().counter.startValue,
            maxValue: store.getState().counter.maxValue,
            currentValue: store.getState().counter.currentValue
        }

    })
})

export type AppStateType = ReturnType<typeof rootReducer>;


