import { ChangeEvent, FC, memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    className?: string;
    placeholder?: string;
    options?: SelectOption[];
    selectedValue?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select:FC<SelectProps> = memo((props) => {
    const { className, placeholder, options, selectedValue, onChange, readonly } = props;

    const handleChange = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});
