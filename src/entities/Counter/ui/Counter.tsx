import {FC} from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


interface CounterProps {
    className?: string;
}

export const Counter:FC<CounterProps> = (props) => {
    const dispatch = useDispatch();
    //const counterValue = useSelector((state:StateSchema) => state.counter.value);
    const counterValue = useSelector(getCounterValue);

    function inc() {
        dispatch(counterActions.increment());
    }

    function dec() {
        dispatch(counterActions.decrement());
    }
    return (
        <div>
            <h1 data-testid="counter-value">{counterValue}</h1>

            <Button data-testid="counter-inc" onClick={inc}>+</Button>
            <Button data-testid="counter-dec" onClick={dec}>-</Button>
        </div>
    );
};
