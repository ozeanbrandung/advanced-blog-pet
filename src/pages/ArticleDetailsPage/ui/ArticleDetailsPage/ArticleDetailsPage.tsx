import {FC, useCallback} from 'react';
//import { useTranslation } from 'react-i18next';
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
import {CommentsList} from 'entities/Comment';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {fetchComments} from '../../model/services/fetchComments';
import {articleDetailsCommentsReducer} from '../../model/slice/articleDetailsSlice';
import {
    articleDetailsSelector, getArticleDetailsError, getArticleDetailsLoading
} from '../../model/selectors/articleDetailsSelectors';
import {AddCommentForm} from 'features/AddCommentForm';
import styles from './ArticleDetailsPage.module.scss';
import {postNewArticleComment} from '../../model/services/postNewArticleComment/postNewArticleComment';
import {Page} from 'widgets/Page';

interface ArticleDetailsPageProps {
    className?: string;
}

const asyncReducersOptions:UseAsyncReducerEntry[] = [{
    reducerKey: 'article',
    reducer: articleReducer
}, {
    reducerKey: 'articleDetailsComments',
    reducer: articleDetailsCommentsReducer,
}];

const ArticleDetailsPage:FC<ArticleDetailsPageProps> = (/*props*/) => {
    //const { className } = props;
    //const {t} = useTranslation('article');
    const dispatch = useDispatch();
    const articleData = useSelector(getArticleData);
    const error = useSelector(getArticleError);
    const isLoading = useSelector(getArticleIsLoading);

    // const commentsData = useSelector(getArticleDetailsComments);
    // const commentsError = useSelector(getArticleDetailsError);
    // const commentsIsLoading = useSelector(getArticleDetailsLoading);

    const commentsData = useSelector(articleDetailsSelector.selectAll);
    const commentsError = useSelector(getArticleDetailsError);
    const commentsIsLoading = useSelector(getArticleDetailsLoading);

    useAsyncReducer({options: asyncReducersOptions});

    const {id} = useParams();

    // useEffect(() => {
    //     if (id) {
    //         if (__PROJECT__ !== 'STORYBOOK') {
    //             dispatch(fetchArticle({id}));
    //         }
    //     }
    // }, [dispatch, id]);
    useInitialEffect(() => {
        //if (id) {
        dispatch(fetchArticle({id}));
        dispatch(fetchComments({id}));
        //}
    });

    const handleAddNewComment = useCallback((value: string) => {
        dispatch(postNewArticleComment({textValue: value}));
    }, [dispatch]);

    return (
        <Page>
            <div>
                {articleData && <Article data={articleData} /> }
                {isLoading && <ArticleSkeleton />}
                {error && <Text isError title={error}/> }
            </div>

            <div>
                <AddCommentForm
                    className={styles.addCommentForm}
                    handleAddNewComment={handleAddNewComment}
                />
                <CommentsList
                    comments={commentsData}
                    isLoading={commentsIsLoading}
                    error={commentsError}
                />
            </div>
        </Page>
    );
};

export default ArticleDetailsPage;
