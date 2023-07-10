import {IComment} from 'entities/Comment';
import {EntityState} from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends  EntityState<IComment> {
    //data: IComment[];

    //ids: string[];
    //entities: ...
    isLoading: boolean;
    error?: string;
}