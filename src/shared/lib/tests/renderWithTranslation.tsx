import {render} from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import {i18nTestConfig} from 'shared/config/i18n/i18nTestConfig';
import {ReactNode} from 'react';

export const renderWithTranslation = (component:ReactNode) => {
    return render(
        <I18nextProvider i18n={i18nTestConfig}>
            {component}
        </I18nextProvider>
    );
};
