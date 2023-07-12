import {useEffect} from 'react';
import {Reducer} from '@reduxjs/toolkit';
import {AsyncReducersKeysMap, StoreWithReducerManager} from 'app/providers/StoreProvider/config/types';
import {useDispatch, useStore} from 'react-redux';

export type UseAsyncReducerEntry  = {
    reducerKey:AsyncReducersKeysMap;
    reducer: Reducer
};

export interface UseAsyncReducerArgs {
    options: UseAsyncReducerEntry[];
    beforeDestroy?: () => void;
    removeAfterUnmount?: boolean;
    //wasInited?: boolean;
}

export const useAsyncReducer = ({
    options, 
    removeAfterUnmount = true, 
    /*wasInited = false,*/ 
    beforeDestroy
}: UseAsyncReducerArgs) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();
    //const location = useLocation();

    //console.log(location);

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        // To start listening for location changes...
        // const unlisten = history.listen(({ action, location }) => {
        //     // The current location changed.
        //     console.log(action, location);
        // });
        //if (!wasInited) {
        options.forEach(({reducerKey, reducer}) => {
            const mounted = mountedReducers[reducerKey];
            console.log(mounted, 'mounted flas');
            if (!mounted) {
                store.reducerManager.add(reducerKey, reducer);
                dispatch({type: `@INIT async ${reducerKey} reducer`});
            }
        });
        //}

        return () => {
            console.log('UNMOUNT');
            if (removeAfterUnmount) {
                beforeDestroy && beforeDestroy();

                options.forEach(({reducerKey}) => {
                    store.reducerManager.remove(reducerKey);
                    dispatch({type: `@DESTROY async ${reducerKey} reducer`});
                });
            }
            // Later, when you are done listening for changes...
            //unlisten();
        };
    //TODO: Тут вылетала проблема - без диспатча кароч если нажать тот же самый роут то исчезал примаученная часть стора 
    }, [/*wasInited*/]);
};
