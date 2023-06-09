import {AnyAction, combineReducers, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {AsyncReducersKeysMap, ReducerManagerSchema} from './types';

export function createReducerManager(initialReducers:ReducersMapObject<StateSchema>):ReducerManagerSchema {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove:Array<AsyncReducersKeysMap> = [];
    //const mountedReducers:MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        //getMountedReducers: () => mountedReducers,
        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state:StateSchema, action:AnyAction) => {
            // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key:AsyncReducersKeysMap, reducer:Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;
            //mountedReducers[key] = true;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key:AsyncReducersKeysMap) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];
            //mountedReducers[key] = false;

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        }
    };
}
