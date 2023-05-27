import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './PageNotFound.module.scss';
import {useTranslation} from 'react-i18next';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound:FC<PageNotFoundProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.PageNotFound, {}, [className])}>
            {t('pageNotFound')}
        </div>
    );
};
