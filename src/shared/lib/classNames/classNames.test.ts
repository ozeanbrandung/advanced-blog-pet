import {classNames} from './classNames';

describe('classNames', function () {
    test('test with only first param', () => {
        expect(classNames('class')).toBe('class');
    });

    test('test with all params', () => {
        expect(classNames(
            'class',
            {hover: true},
            ['class2']
        )).toBe('class class2 hover');
    });

    test('test with two conditional params, one is false', () => {
        expect(classNames(
            'class',
            {hover: true, another: false},
            ['class2']
        )).toBe('class class2 hover');
    });

    test('test with two conditional params are true', () => {
        expect(classNames(
            'class',
            {hover: true, another: true},
            ['class2']
        )).toBe('class class2 hover another');
    });

    test('test 5', () => {
        expect(classNames(
            '',
            {},
            []
        )).toBe('');
    });

    test('test 6', () => {
        expect(classNames(
            'class',
            {},
            ['class2']
        )).toBe('class class2');
    });
});
