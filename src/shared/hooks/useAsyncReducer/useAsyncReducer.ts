import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { AsyncReducersKeysMap, StoreWithReducerManager } from 'app/providers/StoreProvider/config/types';
import { useDispatch, useStore } from 'react-redux';

export type UseAsyncReducerEntry  = {
    reducerKey:AsyncReducersKeysMap;
    reducer: Reducer
};

interface UseAsyncReducerArgs {
    options: UseAsyncReducerEntry[];
    beforeDestroy?: () => void;
    removeAfterUnmount?: boolean;
}

export const useAsyncReducer = ({options, removeAfterUnmount = true, beforeDestroy}: UseAsyncReducerArgs) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        options.forEach(({reducerKey, reducer}) => {
            store.reducerManager.add(reducerKey, reducer);
            dispatch({type: `@INIT async ${reducerKey} reducer`});
        });

        return () => {
            if (removeAfterUnmount) {
                beforeDestroy && beforeDestroy();

                options.forEach(({reducerKey}) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({type: `@DESTROY async ${reducerKey} reducer`});
                });
            }
        };
        //eslint-disable-next-line
    }, []);
};
