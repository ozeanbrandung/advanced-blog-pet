import {render} from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import {i18nTestConfig} from 'shared/config/i18n/i18nTestConfig';
import {ReactNode} from 'react';
import { MemoryRouter} from 'react-router-dom';

export interface componentRenderOptions {
    initialRoute?: string;
}

export const renderComponent = (component:ReactNode, options: componentRenderOptions = {}) => {
    const {
        initialRoute = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <I18nextProvider i18n={i18nTestConfig}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    );
};
