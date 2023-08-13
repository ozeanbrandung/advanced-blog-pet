import {ChangeEvent, useCallback, useMemo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    label: string;
}

interface SelectProps<T> {
    className?: string;
    placeholder?: string;
    options?: SelectOption<T>[];
    selectedValue?: string | number;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

export const Select = <T extends string | number>(props: SelectProps<T>) => {
    const { className, placeholder, options, selectedValue, onChange, readonly } = props;

    const handleChange = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }, [onChange]);

    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option key={opt.value} value={opt.value} className={styles.option}>
                {opt.label}
            </option>
        ));
    }, [options]);

    return (
        <div className={classNames(styles.selectWrapper, {}, [className])}>
            {placeholder && (
                <span className={styles.placeholder}>{placeholder}</span>
            )}
            <span className={styles.arrow}>{'>'}</span>
            <select
                disabled={readonly}
                className={styles.select}
                value={selectedValue}
                onChange={handleChange}
            >
                {optionsList}
            </select>
        </div>
    );
};
