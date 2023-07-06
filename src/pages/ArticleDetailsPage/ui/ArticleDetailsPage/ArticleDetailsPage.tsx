import { FC, useEffect } from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import {
    getArticleData,
    getArticleError,
    getArticleIsLoading
} from 'entities/Article/model/selectors/articleSelectors';
import { useAsyncReducer, UseAsyncReducerEntry } from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import { useParams } from 'react-router-dom';
import { Article, articleReducer, ArticleSkeleton, fetchArticle } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
//import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const asyncReducersOptions:UseAsyncReducerEntry[] = [{
    reducerKey: 'article',
    reducer: articleReducer
}];

const ArticleDetailsPage:FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    //const {t} = useTranslation('article');
    const dispatch = useDispatch();
    const articleData = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = useSelector(getArticleIsLoading);

    useAsyncReducer({options: asyncReducersOptions});

    const {id} = useParams();

    useEffect(() => {
        if (id) {
            if (__PROJECT__ !== 'STORYBOOK') {
                dispatch(fetchArticle({id}));
            }
        }
    }, [dispatch, id]);

    return (
        <div className={classNames('', {}, [className])}>
            {articleData && <Article data={articleData} /> }
            {isLoading && <ArticleSkeleton />}
            {error && <Text isError title={error}/> }
        </div>
    );
};

export default ArticleDetailsPage;
