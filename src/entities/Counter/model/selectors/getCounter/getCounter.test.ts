import { getCounter } from './getCounter';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getCounter', () => {
    test('should return counter value', () => {
        //DeepPartial - чтобы мы могли не весь стейт объявлять а только чать
        const mockState:DeepPartial<StateSchema> = {
            counter: {value: 10}
        };
        //в коде использовать as вообще не желательно - это приведение типов
        expect(getCounter(mockState as StateSchema)).toEqual({value: 10});
    });
});
