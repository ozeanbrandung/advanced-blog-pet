import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AuthFormSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //async reducers
    authForm?: AuthFormSchema;
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

