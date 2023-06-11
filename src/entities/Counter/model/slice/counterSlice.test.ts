import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
    const mockState:CounterSchema = {value: 10};
    test('increment counter', () => {
        expect(counterReducer(mockState as CounterSchema, counterActions.increment))
            .toEqual({value: 11});
    });
    test('decrement counter', () => {
        expect(counterReducer(mockState as CounterSchema, counterActions.decrement))
            .toEqual({value: 9});
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement))
            .toEqual({value: -1});
    });
});
