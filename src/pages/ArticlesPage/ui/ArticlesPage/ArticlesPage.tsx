import {FC, useCallback} from 'react';
//import { useTranslation } from 'react-i18next';
import {ArticlesList, ArticlesViewMode} from 'entities/Article';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {
    articlesSelector,
    getArticlesPageError,
    getArticlesPageLoading,
    getArticlesViewMode
} from '../../model/selectors/articlesSelectors';
import {ErroredButton} from 'shared/ui/ErroredButton/ErroredButton';
import {useAsyncReducer, UseAsyncReducerEntry} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {articlesActions, articlesReducer} from '../../model/slice/articlesSlice';
import {SwitchArticlesViewMode} from 'features/SwitchArticlesViewMode';
import {Page} from 'widgets/Page';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {ArticleFilters} from 'features/ArticleFilters';

//import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const options:UseAsyncReducerEntry[] = [{
    reducer: articlesReducer,
    reducerKey: 'articles',
}];

const ArticlesPage:FC<ArticlesPageProps> = (/*props*/) => {
    //const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(articlesSelector.selectAll);
    const isLoading = useSelector(getArticlesPageLoading);
    const isError = useSelector(getArticlesPageError);
    const currentViewMode = useSelector(getArticlesViewMode);

    useAsyncReducer({options, removeAfterUnmount: false /*, wasInited: articlesStoreInited */});

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const handleLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const handleViewModeChange = useCallback((viewMode: ArticlesViewMode) => {
        dispatch(articlesActions.setViewMode(viewMode));
    }, [dispatch]);
    
    if (isError) {
        return <ErroredButton>{isError}</ErroredButton>;
    }

    return (
        <Page key="articles" onScrollEnd={handleLoadNextPage} isScrollPositionSaved>
            <ArticleFilters />
            <SwitchArticlesViewMode onChangeMode={handleViewModeChange} currentViewMode={currentViewMode} />
            <ArticlesList articles={articles} viewMode={currentViewMode} isLoading={isLoading} />
        </Page>
    );
};

export default ArticlesPage;
