import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError:FC<PageErrorProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('default');

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames('', {}, [className])}>
            {t('errorPage')}
            <Button onClick={reloadPage}>
                {t('reloadPageButton')}
            </Button>
        </div>
    );
};
