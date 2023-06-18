import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const MainPage = memo(() => {
    const {t} = useTranslation('main');
    return (
        <div>
            {t('title')}
            {/*<ErroredButton />*/}
        </div>
    );
});

export default MainPage;
