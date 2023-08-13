import React, {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleFilters.module.scss';
import {ArticleSelectors} from '../ArticleSelectors/ArticleSelectors';
import {Input} from 'shared/ui/Input/Input';
import {useAsyncReducer} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {articleFiltersActions, articleFiltersReducer} from '../../model/slice/articleFiltersSlice';
import {useSelector} from 'react-redux';
import {
    getArticleType,
    getOrderValue,
    getSearchValue,
    getSortValue
} from '../../model/selectors/articleFiltersSelectors';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {Order, Sort} from '../../model/types/articleFiltersTypes';
//TODO: мне чот не нравится что тут нарушается методология
import {articlesActions} from 'pages/ArticlesPage/model/slice/articlesSlice';
import {fetchArticles} from 'pages/ArticlesPage/model/services/fetchArticles/fetchArticles';
import {useDebounce} from 'shared/hooks/useDebounce/useDebounce';
import {ITab, Tabs} from 'shared/ui/Tabs/Tabs';
import {ArticleTypes} from 'entities/Article';

interface ArticleFiltersProps {
    className?: string;
}

const tabs:ITab[] = [
    {
        value: ArticleTypes.ALL,
        label: ArticleTypes.ALL
    },
    {
        value: ArticleTypes.IT,
        label: ArticleTypes.IT
    },
    {
        value: ArticleTypes.MANAGEMENT,
        label: ArticleTypes.MANAGEMENT
    },
    {
        value: ArticleTypes.MARKETING,
        label: ArticleTypes.MARKETING
    },
];

export const ArticleFilters:FC<ArticleFiltersProps> = memo((props) => {
    const { className } = props;
    
    const sort = useSelector(getSortValue);
    const order = useSelector(getOrderValue);
    const search = useSelector(getSearchValue);
    const type = useSelector(getArticleType);
    
    const dispatch = useAppDispatch();
    
    useAsyncReducer({options: [{reducer: articleFiltersReducer, reducerKey: 'articleFilters'}]});

    const fetchData = useCallback(() => {
        dispatch(fetchArticles({replace: true}));
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 500);

    const handleSearch = useCallback((value: string) => {
        dispatch(articleFiltersActions.setSearch(value));
        //сбрасываем страницу чтобы поиск по всем страницам был
        dispatch(articlesActions.setCurrentPage(1));
        //не забываем что дебаунсим только для серча
        debouncedFetch();
    }, [dispatch, debouncedFetch]);
    
    const handleOrderChange = useCallback((value: Order) => {
        dispatch(articleFiltersActions.setOrder(value));
        dispatch(articlesActions.setCurrentPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleSortChange = useCallback((value: Sort) => {
        dispatch(articleFiltersActions.setSort(value));
        dispatch(articlesActions.setCurrentPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const handleChangeType = useCallback((value: ArticleTypes) => {
        dispatch(articleFiltersActions.setType(value));
        dispatch(articlesActions.setCurrentPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(styles.articleFilters, {}, [className])}>
            <ArticleSelectors
                className={styles.selectors}
                sort={sort} 
                order={order} 
                onOrderChange={handleOrderChange} 
                onSortChange={handleSortChange} 
            />

            <Input className={styles.search} value={search} onChange={handleSearch}/>

            <Tabs tabs={tabs} selectedTabValue={type} onTabClick={handleChangeType} />
        </div>
    );
});