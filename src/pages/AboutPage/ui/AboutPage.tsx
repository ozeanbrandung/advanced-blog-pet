import {useTranslation} from 'react-i18next';
import { memo } from 'react';
import {Page} from 'widgets/Page';

const AboutPage = memo(() => {
    const {t} = useTranslation('about');
    return (
        <Page>
            {t('title')}
        </Page>
    );
});

export default AboutPage;
