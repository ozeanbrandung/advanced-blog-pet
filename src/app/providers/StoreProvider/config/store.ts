import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

//создание стора засунем в функцию чтобы можно было переиспользоать
//как минимум для сторибука и джеста
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        //отключаем девтулзы для продакшна
        devTools: __IS_DEV__,
        //эту штуку тоже для тестов делаем - чтобы можно было передать данные вручную
        preloadedState: initialState
    });
}

// export const store = configureStore({
//     reducer: {},
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch
