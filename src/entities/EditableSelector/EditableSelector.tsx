//import styles from './EditableSelector.module.scss';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useInputWithData, UseInputWithDataProps } from 'shared/hooks/useInputWithData/useInputWithData';

interface EditableSelectorProps<Schema> extends UseInputWithDataProps<Schema> {
    className?: string;
    readonly?: boolean;
    placeholder?: string;
    options: SelectOption[];
}

export function EditableSelector<Schema>(props: EditableSelectorProps<Schema>) {
    const { className, selector, action, readonly, placeholder, payloadCreator, options } = props;
    const {value, onChange} = useInputWithData<Schema>({selector, action, payloadCreator});

    return (
        <Select
            className={className}
            selectedValue={value as string}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            readonly={readonly}
        />
    );
}
