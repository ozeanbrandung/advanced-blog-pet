import React, {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleSelectors.module.scss';
import {Select, SelectOption} from 'shared/ui/Select/Select';
import {Order, Sort} from '../../model/types/articleFiltersTypes';

interface ArticleSelectorsProps {
    className?: string;
    sort: Sort;
    order: Order;
    onOrderChange(value: Order): void;
    onSortChange(value: Sort): void;
}

const sortOptions:SelectOption<Sort>[] = [
    {
        label: 'По дате', value: Sort.DATE,
    },
    {
        label: 'По просмотрам', value: Sort.VIEWS,
    },
    {
        label: 'По названию', value: Sort.TITLE,
    }
];

const orderOptions:SelectOption<Order>[] = [
    {
        label: 'По возрастанию', value: Order.ASC,
    },
    {
        label: 'По убыванию', value: Order.DESC,
    },
];

export const ArticleSelectors:FC<ArticleSelectorsProps> = (props) => {
    const { className, sort, order, onSortChange, onOrderChange } = props;

    return (
        <div className={classNames(styles.articleSelectors, {}, [className])}>
            <Select
                options={sortOptions}
                className={styles.sort}
                selectedValue={sort}
                onChange={onSortChange}
            />

            <Select
                options={orderOptions}
                className={styles.order}
                selectedValue={order}
                onChange={onOrderChange}
            />
        </div>
    );
};