import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema } from './types';
import { $api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

//создание стора засунем в функцию чтобы можно было переиспользоать
//как минимум для сторибука и джеста
export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction
) {
    //static reducers
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        //authForm: authFormReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    // Create a store with the root reducer function being the one exposed by the manager.
    const store = configureStore({
        //reducer: rootReducers,
        reducer: reducerManager.reduce,
        //отключаем девтулзы для продакшна
        devTools: __IS_DEV__,
        //эту штуку тоже для тестов делаем - чтобы можно было передать данные вручную
        preloadedState: initialState,
        //настраиваем middleware для thunk
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }

        })
    });

    // Optional: Put the reducer manager on the store so it is easily accessible
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

// export const store = configureStore({
//     reducer: {},
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch
