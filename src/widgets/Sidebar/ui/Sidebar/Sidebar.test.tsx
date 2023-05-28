import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from './Sidebar';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation';

describe('sidebar', function () {
    test('', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse sidebar', () => {
        renderWithTranslation(<Sidebar/>);
        fireEvent.click(screen.getByTestId('sidebar-button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
