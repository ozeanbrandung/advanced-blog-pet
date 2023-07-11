import {FC, useCallback} from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {ArticlesList, ArticlesViewMode} from 'entities/Article';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {fetchArticles} from '../../model/services/fetchArticles/fetchArticles';
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

//import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const options:UseAsyncReducerEntry[] = [{
    reducer: articlesReducer,
    reducerKey: 'articles',
}];

const ArticlesPage:FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(articlesSelector.selectAll);
    const isLoading = useSelector(getArticlesPageLoading);
    const isError = useSelector(getArticlesPageError);
    const currentViewMode = useSelector(getArticlesViewMode);

    useAsyncReducer({options});

    useInitialEffect(() => {
        dispatch(fetchArticles());
        dispatch(articlesActions.initializeViewMode());
    });

    const handleViewModeChange = useCallback((viewMode: ArticlesViewMode) => {
        dispatch(articlesActions.setViewMode(viewMode));
    }, [dispatch]);
    
    if (isError) {
        return <ErroredButton>{isError}</ErroredButton>;
    }

    return (
        <div className={classNames('', {}, [className])}>
            <SwitchArticlesViewMode onChangeMode={handleViewModeChange} currentViewMode={currentViewMode} />
            <ArticlesList articles={articles} viewMode={currentViewMode} isLoading={isLoading} />
        </div>
    );
};

export default ArticlesPage;
