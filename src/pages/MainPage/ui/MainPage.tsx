import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {Page} from 'widgets/Page';

const MainPage = memo(() => {
    const {t} = useTranslation('main');
    return (
        <Page>
            {t('title')}
            {/*<ErroredButton />*/}
        </Page>
    );
});

export default MainPage;
