import { FC, memo } from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

// export enum TextTheme {
//     DEFAULT = 'default',
//     ERRORED = 'errored'
// }

export enum TextAlign {
    CENTER = 'center',
    RIGHT = 'right',
    LEFT = 'left'
}

export enum TextSize {
    M = 'M',
    L = 'L'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    isError?: boolean;
    align?: TextAlign;
    size?: TextSize;
    titleClassName?: string;
    textClassName?: string;
    //theme?: TextTheme;
}

export const Text:FC<TextProps> = memo((props) => {
    const { className, title, text, isError, align = TextAlign.LEFT, size = TextSize.M } = props;

    return (
        <div className={classNames(
            styles.Text,
            {[styles.errored]: isError},
            [className, styles[align], styles[size]]
        )}>
            {title && (
                <h2 className={classNames(styles.title, {}, [props.titleClassName])}>
                    {title}
                </h2>
            )}

            {text && (
                <div className={classNames(styles.text, {}, [props.textClassName])}>
                    {text}
                </div>
            )}
        </div>
    );
});
