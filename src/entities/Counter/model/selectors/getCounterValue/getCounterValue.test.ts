import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounterValue', () => {
    test('get counter value', () => {
        const mockState:DeepPartial<StateSchema> = {
            counter: {value: 10}
        };
        expect(getCounterValue(mockState as StateSchema)).toEqual(10);
    });
});
