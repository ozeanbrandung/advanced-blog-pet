import { FC, memo } from 'react';
//import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {Page} from 'widgets/Page';
import {useParams} from 'react-router-dom';
//import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage:FC<ArticleEditPageProps> = memo((props) => {
    const { className } = props;
    //const {t} = useTranslation('default');
    const {id} = useParams();
    const isNew = !id;

    return (
        <Page className={classNames(/*styles.ArticleEditPage*/ '', {}, [className])}>
            {isNew? 'Create article' : 'Edit article'}
        </Page>
    );
});

export default ArticleEditPage;
