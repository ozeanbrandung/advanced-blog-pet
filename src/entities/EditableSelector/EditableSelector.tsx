//import styles from './EditableSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useInputWithData, UseInputWithDataProps } from 'shared/hooks/useInputWithData/useInputWithData';

interface EditableSelectorProps<Schema, T> extends UseInputWithDataProps<Schema> {
    className?: string;
    readonly?: boolean;
    placeholder?: string;
    options: SelectOption<T>[];
}

export function EditableSelector<Schema, T extends string | number>(props: EditableSelectorProps<Schema, T>) {
    const { className, selector, action, readonly, placeholder, payloadCreator, options } = props;
    const {value, onChange} = useInputWithData<Schema>({selector, action, payloadCreator});

    return (
        <Select<T>
            className={className}
            selectedValue={value}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            readonly={readonly}
        />
    );
}
