import {ArticleTypes} from 'entities/Article';

export enum Sort {
    DATE = 'date',
    TITLE = 'title',
    VIEWS = 'views'
}

export enum Order {
    ASC = 'asc',
    DESC = 'desc'
}

export interface IArticleFiltersSchema {
    order: Order;
    sort: Sort;
    search: string;
    type: ArticleTypes;
}