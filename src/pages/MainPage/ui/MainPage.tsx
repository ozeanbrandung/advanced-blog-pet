import {useTranslation} from 'react-i18next';
import {ErroredButton} from 'shared/ui/ErroredButton/ErroredButton';

const MainPage = () => {
    const {t} = useTranslation('main');
    return (
        <div>
            {t('title')}
            {/*<ErroredButton />*/}
        </div>
    );
};

export default MainPage;
