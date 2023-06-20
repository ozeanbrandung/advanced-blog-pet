import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthFormSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from 'app/providers/StoreProvider';
import { ProfileStateSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //async reducers
    authForm?: AuthFormSchema;
    profile?: ProfileStateSchema;
}

export type AsyncReducersKeysMap = keyof StateSchema;

export interface ReducerManagerSchema {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add: (key:AsyncReducersKeysMap, reducer:Reducer) => void;
    remove: (key:AsyncReducersKeysMap) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManagerSchema;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: NavigateFunction;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg
}
