import { FC, InputHTMLAttributes, memo, ChangeEvent, useState, ReactEventHandler, useEffect, useRef } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss';

//исключим то что хотим переопределить из дефолтного типа
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input:FC<InputProps> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...other
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleFocus() {
        setIsFocused(true);
    }

    function handleBlur() {
        setIsFocused(false);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        //оператор optional chaining
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    }

    function handleSelect(e: any) {
        setCaretPosition(e?.target?.selectionStart || 0);
    }

    const placeholderContent = placeholder ?
        `${!isFocused && !inputRef.current?.value.length ? placeholder : ''} >`
        : '>';

    useEffect(() => {
        if(autoFocus) {
            setIsFocused(true);
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div tabIndex={-1} className={classNames(styles.inputWrapper, {}, [className])}>
            <div className={classNames(styles.placeholder, {[styles.focused]: isFocused})}>
                {placeholderContent}
            </div>
            {placeholder && isFocused && (
                <div className={styles.placeholderFocused}>
                    {placeholder}
                </div>
            )}
            <input
                ref={inputRef}
                autoFocus={autoFocus}
                className={styles.input}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onSelect={handleSelect}
                type={type}
                {...other}
            />
            {isFocused && (
                <span
                    style={{left: `${22 + caretPosition * 9.5}px`}}
                    className={styles.carriage}
                />
            )}
        </div>

    );
});

Input.displayName = 'Input';

//Input.propTypes = InputProps;
