import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {renderComponent} from 'shared/lib/tests/renderComponent';

describe('sidebar', function () {
    test('', () => {
        renderComponent(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        renderComponent(<Sidebar/>);
        fireEvent.click(screen.getByTestId('sidebar-button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
