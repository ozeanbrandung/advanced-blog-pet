import {getQueryParams} from '../url/addQueryParams';

describe('', function (){
    test('test one param', () => {
        const params = getQueryParams({search: 'abc'});
        expect(params).toBe('?search=abc');
    });

    test('test many params', () => {
        const params = getQueryParams({search: 'abc', other: 'some'});
        expect(params).toBe('?search=abc&other=some');
    });

    test('test with undefined', () => {
        const params = getQueryParams({test: 'abc', test2: undefined});
        expect(params).toBe('?test=abc');
    });

    test('test no params', () => {
        const params = getQueryParams({});
        expect(params).toBe('?');
    });
});