import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonThemes {
    INITIAL = 'initial',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
    XL = 'xl',
    AUTO = 'auto'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemes;
    isRound?: boolean;
    isRounded?: boolean;
    size?: ButtonSize;
    children: ReactNode;
}

export const Button:FC<ButtonProps> = memo((props) => {
    const {
        className,
        children,
        theme = ButtonThemes.INITIAL,
        isRound,
        isRounded,
        disabled,
        size = ButtonSize.AUTO,
        ...otherProps
    } = props;

    const mods:Mods = {
        [styles.round]: isRound,
        [styles.rounded]: isRounded,
        [styles.disabled]: disabled,
        // [styles[ButtonSize.M]]: size === ButtonSize.M,
        // [styles[ButtonSize.L]]: size === ButtonSize.L,
        // [styles[ButtonSize.XL]]: size === ButtonSize.XL,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(
                styles.Button,
                mods,
                [className, styles[theme], styles[size]]
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
});
