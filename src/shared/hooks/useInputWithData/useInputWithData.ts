import { Selector, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { ActionCreatorWithOptionalPayload} from '@reduxjs/toolkit';
import { useCallback } from 'react';

export interface useInputWithDataProps<Payload> {
    selector: Selector<StateSchema, string | number>,
    action: ActionCreatorWithOptionalPayload<Payload>;
}

export type InputsListConfigType<Schema> = {
    [K in keyof Schema]: useInputWithDataProps<string>
}

export function useInputWithData<Payload>({selector, action}:useInputWithDataProps<Payload>) {
    const dispatch = useDispatch();
    const value = useSelector(selector);

    const onChange = useCallback((value) => {
        dispatch(action(value));
    }, [dispatch, action]);

    return {
        value,
        onChange,
    };
}
