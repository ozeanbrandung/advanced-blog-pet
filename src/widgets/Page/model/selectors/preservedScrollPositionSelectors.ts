import {StateSchema} from 'app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';

export const getPreservedScrollPosition = (state: StateSchema) => state.preservedScrollPosition.scroll;

export const getPreservesScrollPositionByPath = createSelector(
    getPreservedScrollPosition,
    //аргументом в селектор нужно передать еще и путь
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);