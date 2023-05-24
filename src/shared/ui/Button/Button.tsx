import {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonThemes {
    INITIAL = 'initial',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemes;
}

export const Button:FC<ButtonProps> = (props) => {
    const { className, children, theme = ButtonThemes.INITIAL, ...otherProps } = props;

    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
