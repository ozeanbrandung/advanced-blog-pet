import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useInputWithData } from 'shared/hooks/useInputWithData/useInputWithData';
import { Selector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit';

interface EditableInputProps {
    className?: string;
    selector: Selector<StateSchema, string | number>;
    action: ActionCreatorWithOptionalPayload<string>;
    readonly: boolean;
    placeholder: string;
}

export const EditableInput:FC<EditableInputProps> = (props) => {
    const { className, selector, action, readonly, placeholder } = props;
    const {value, onChange} = useInputWithData<string>({selector, action});

    return (
        <Input
            value={value}
            type={Number.isInteger(value) ? 'number' : 'text'}
            onChange={onChange}
            readOnly={readonly}
            placeholder={placeholder}
            className={classNames('', {}, [className])}
        />
    );
};
