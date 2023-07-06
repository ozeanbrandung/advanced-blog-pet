import { FC } from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage:FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    //const {t} = useTranslation('articles');

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames('', {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default ArticlesPage;
