import { Selector, useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { ActionCreatorWithPayload} from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { SelectOption } from 'shared/ui/Select/Select';

export interface UseInputWithDataProps<Payload> {
    selector: Selector<StateSchema, string | number>,
    action: ActionCreatorWithPayload<Payload>;
    payloadCreator(value: string): Payload;
}

export enum InputTypes {
    SELECTOR = 'selector',
    INPUT = 'input'
}

export type InputsListConfigType<Schema> = {
    [K in keyof Schema]: UseInputWithDataProps<DeepPartial<Schema>>
    & {type: InputTypes; config?: {options: SelectOption[]}}
}

export function useInputWithData<Payload>({selector, action, payloadCreator}:UseInputWithDataProps<Payload>) {
    const dispatch = useDispatch();
    const value = useSelector(selector);

    const onChange = useCallback((value) => {
        const payload = payloadCreator(value);
        dispatch(action(payload));
    }, [dispatch, action, payloadCreator]);

    return {
        value,
        onChange,
    };
}
