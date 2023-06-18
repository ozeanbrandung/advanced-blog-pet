import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { userEvent } from '@storybook/testing-library';

describe('button test', function () {
    test('counter value title', () => {
        renderComponent(<Counter />, {
            initialState: {counter: {value: 8}}
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('8');
    });

    test('counter inc button', () => {
        renderComponent(<Counter />, {
            initialState: {counter: {value: 8}}
        });
        userEvent.click(screen.getByTestId('counter-inc'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });

    test('counter dec button', () => {
        renderComponent(<Counter />, {
            initialState: {counter: {value: 8}}
        });
        userEvent.click(screen.getByTestId('counter-dec'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('7');
    });
});
