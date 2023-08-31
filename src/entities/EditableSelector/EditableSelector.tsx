//import styles from './EditableSelector.module.scss';
import {SelectOption} from 'shared/ui/Select/Select';
import {useInputWithData, UseInputWithDataProps} from 'shared/hooks/useInputWithData/useInputWithData';
import {DropdownDirection, Listbox} from 'shared/ui/Listbox/Listbox';
import {useMemo} from 'react';

interface EditableSelectorProps<Schema, T> extends UseInputWithDataProps<Schema> {
    className?: string;
    readonly?: boolean;
    //placeholder?: string;
    options: SelectOption<T>[];
    direction: DropdownDirection;
}

export function EditableSelector<Schema, T extends string | number>(props: EditableSelectorProps<Schema, T>) {
    const { className, selector, direction, action, readonly, payloadCreator, options } = props;
    const {value, onChange} = useInputWithData<Schema>({selector, action, payloadCreator});

    const selectedLabel = useMemo(() => {
        return options.find(opt => opt.value === value)?.label;
    }, [options, value]);

    return (
        <Listbox<T>
            className={className}
            selectedValue={value}
            onChange={onChange}
            options={options}
            placeholder={selectedLabel}
            readonly={readonly}
            direction={direction}
        />
    );
}
