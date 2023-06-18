import {render, screen} from '@testing-library/react';
import {Button, ButtonThemes} from './Button';

describe('button test', function () {
    test('', () => {
        render(<Button theme={ButtonThemes.INITIAL}>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    test('', () => {
        render(<Button theme={ButtonThemes.INITIAL}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('initial');
        screen.debug();
    });
});
