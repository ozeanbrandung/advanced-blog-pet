import {FC, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getArticleData, getArticleError, getArticleIsLoading} from 'entities/Article/model/selectors/articleSelectors';
import {useAsyncReducer, UseAsyncReducerEntry} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {Article, articleReducer, ArticleSkeleton, ArticlesList, ArticlesViewMode, fetchArticle} from 'entities/Article';
import {Text} from 'shared/ui/Text/Text';
import {CommentsList} from 'entities/Comment';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {fetchComments} from '../../model/services/fetchComments/fetchComments';
import {
    articleDetailsSelector,
    getArticleDetailsError,
    getArticleDetailsLoading
} from '../../model/selectors/articleDetailsCommentsSelectors';
import {AddCommentForm} from 'features/AddCommentForm';
import styles from './ArticleDetailsPage.module.scss';
import {postNewArticleComment} from '../../model/services/postNewArticleComment/postNewArticleComment';
import {Page} from 'widgets/Page';
import {fetchRecommendations} from '../../model/services/fetchRecomendations/fetchRecommendations';
import {
    getRecommendations,
    getRecommendationsError,
    getRecommendationsLoading
} from '../../model/selectors/articleDetailsRecomendationsSelectors';
import {articleDetailsReducer} from '../../model/slice';
import {ArticleDetailsPageHeader} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const asyncReducersOptions:UseAsyncReducerEntry[] = [
    {
        reducerKey: 'article',
        reducer: articleReducer
    },
    {
        reducerKey: 'articleDetailsPage',
        reducer: articleDetailsReducer,
    }
    // {
    //     reducerKey: 'articleDetailsComments',
    //     reducer: articleDetailsCommentsReducer,
    // },
    // {
    //     reducerKey: 'articleDetailsRecommendations',
    //     reducer: articleDetailsRecommendationsReducer,
    // }
];

const ArticleDetailsPage:FC<ArticleDetailsPageProps> = (/*props*/) => {
    //const { className } = props;
    const {t} = useTranslation('article');
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

    const recommendationsData = useSelector(getRecommendations.selectAll);
    const recommendationsError = useSelector(getRecommendationsError);
    const recommendationsLoading = useSelector(getRecommendationsLoading);

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
        dispatch(fetchRecommendations());
        //}
    });

    const handleAddNewComment = useCallback((value: string) => {
        dispatch(postNewArticleComment({textValue: value}));
    }, [dispatch]);

    return (
        <Page>
            <ArticleDetailsPageHeader />

            <div>
                {articleData && <Article data={articleData} /> }
                {isLoading && <ArticleSkeleton />}
                {error && <Text isError title={error}/> }
            </div>

            <div className={styles.recommendations}>
                <Text title={t('recommendationsTitle')}/>

                {!recommendationsError && (
                    <ArticlesList
                        target='_blank'
                        className={styles.articlesList}
                        articles={recommendationsData}
                        viewMode={ArticlesViewMode.GRID}
                        isLoading={recommendationsLoading}
                    />
                )}

                {recommendationsError && (
                    <Text isError title={recommendationsError}/>
                )}
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
