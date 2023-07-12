import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './PageNotFound.module.scss';
import {useTranslation} from 'react-i18next';
import {Page} from 'shared/ui/Page/Page';

interface PageNotFoundProps {
    className?: string;
}

export const PageNotFound:FC<PageNotFoundProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation('default');

    return (
        <Page>
            <div className={classNames(styles.PageNotFound, {}, [className])}>
                {t('pageNotFound')}
            </div>
        </Page>
    );
};
