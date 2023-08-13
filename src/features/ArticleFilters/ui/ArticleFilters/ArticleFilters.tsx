import React, {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleFilters.module.scss';
import {ArticleSelectors} from 'features/ArticleFilters/ui/ArticleSelectors/ArticleSelectors';
import {Input} from 'shared/ui/Input/Input';
import {useAsyncReducer} from 'shared/hooks/useAsyncReducer/useAsyncReducer';
import {articleFiltersActions, articleFiltersReducer} from '../../model/slice/articleFiltersSlice';
import {useSelector} from 'react-redux';
import {
    getOrderValue,
    getSearchValue,
    getSortValue
} from '../../model/selectors/articleFiltersSelectors';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {Order, Sort} from '../../model/types/articleFiltersTypes';

interface ArticleFiltersProps {
    className?: string;
}

export const ArticleFilters:FC<ArticleFiltersProps> = memo((props) => {
    const { className } = props;
    
    const sort = useSelector(getSortValue);
    const order = useSelector(getOrderValue);
    const search = useSelector(getSearchValue);
    
    const dispatch = useAppDispatch();
    
    useAsyncReducer({options: [{reducer: articleFiltersReducer, reducerKey: 'articleFilters'}]});

    const handleSearch = useCallback((value: string) => {
        dispatch(articleFiltersActions.setSearch(value));
    }, [dispatch]);
    
    const handleOrderChange = useCallback((value: Order) => {
        dispatch(articleFiltersActions.setOrder(value));
    }, [dispatch]);

    const handleSortChange = useCallback((value: Sort) => {
        dispatch(articleFiltersActions.setSort(value));
    }, [dispatch]);

    console.log(sort);
    console.log(search);
    console.log(order);

    return (
        <div className={classNames(styles.articleFilters, {}, [className])}>
            <ArticleSelectors
                className={styles.selectors}
                sort={sort} 
                order={order} 
                onOrderChange={handleOrderChange} 
                onSortChange={handleSortChange} 
            />
            
            <div>
                <Input value={search} onChange={handleSearch}/>
            </div>
        </div>
    );
});