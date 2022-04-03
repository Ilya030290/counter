import React, {useState} from 'react';
import s from './Counter.module.css';
import {CounterHeader} from "./CounterHeader";
import {CounterButtons} from "./CounterButtons";


export const Counter = () => {

    let [counterState, setCounterState] = useState<number>(0)

    const counterInc = () => {
        if (counterState >= 0 && counterState < 5) {
            setCounterState(++counterState);
        }
    }

    const resetCounter = () => {
        if (counterState > 0) {
            setCounterState(0)
        }
    }

    let disabledInc = counterState > 4 
    let disabledReset = counterState === 0

  return (
          <div className={s.counter}>
              <CounterHeader counterState={counterState}/>
              <CounterButtons
                  onClickInc={counterInc}
                  onClickReset={resetCounter}
                  disabledInc={disabledInc}
                  disabledReset={disabledReset}
              />
          </div>
  );
}


