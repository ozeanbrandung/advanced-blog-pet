import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useInputWithData, UseInputWithDataProps } from 'shared/hooks/useInputWithData/useInputWithData';

interface EditableInputProps<Schema> extends UseInputWithDataProps<Schema> {
    className?: string;
    readonly: boolean;
    placeholder: string;
}

export function EditableInput<Schema> (props:EditableInputProps<Schema>) {
    const { className, selector, action, readonly, placeholder, payloadCreator } = props;
    const {value, onChange} = useInputWithData<Schema>({selector, action, payloadCreator});

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
}
