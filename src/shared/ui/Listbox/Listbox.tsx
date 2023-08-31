import {Listbox as HeadlessListbox} from '@headlessui/react';
import styles from './Listbox.module.scss';
import {Fragment, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonThemes} from '../Button/Button';

export type DropdownDirection = 'bottom' | 'top';
export interface ListboxOption<T> {
    value: T;
    label: ReactNode;
    disabled?: boolean;
}
interface ListboxProps<T> {
    className?: string;
    placeholder?: string;
    options?: ListboxOption<T>[];
    selectedValue?: string | number;
    readonly?: boolean;
    onChange?: (value: T) => void;
    direction?: DropdownDirection;
}

export const Listbox = <T extends string | number>(props: ListboxProps<T>) => {
    const {
        className,
        options,
        readonly,
        placeholder,
        selectedValue,
        onChange,
        direction = 'bottom'
    } = props;

    // const initialLabel = useMemo(() => {
    //     return placeholder ?
    //         '' :
    //         options?.find(opt => opt.value === selectedValue)?.label;
    // }, []);
    //
    // const [selectedLabel, setSelectedLabel] = useState(initialLabel);
    //
    // console.log(initialLabel, selectedLabel, options, selectedValue)

    // const handleClick = useCallback((newLabel) => () => {
    //     setSelectedLabel(newLabel);
    // }, []);

    return (
        <HeadlessListbox
            disabled={readonly}
            as="div"
            value={selectedValue}
            onChange={onChange}
            className={classNames(styles.listBox, {}, [className])}
        >
            <HeadlessListbox.Button className={styles.buttonWrapper} as={'div'} role={'button'}>
                <Button theme={ButtonThemes.OUTLINE} className={styles.button} disabled={readonly}>
                    {placeholder ? placeholder : options?.find(opt => opt.value === selectedValue)?.label}
                </Button>
            </HeadlessListbox.Button>

            <HeadlessListbox.Options className={classNames(styles.options, {}, [styles[direction]])}>
                {options?.map((option) => (
                    <HeadlessListbox.Option
                        //className={styles.option}
                        key={option.value}
                        value={option.value}
                        as={Fragment}
                        disabled={option.disabled}
                    >
                        {({ active, selected }) => (
                            <li
                                //onClick={handleClick(option.label)}
                                className={classNames(
                                    styles.option,
                                    {[styles.active]: active, [styles.disabled]: option.disabled},
                                    []
                                )}
                            >
                                {selected && '+'}
                                {option.label}
                            </li>
                        )}
                    </HeadlessListbox.Option>
                ))}
            </HeadlessListbox.Options>
        </HeadlessListbox>
    );
};