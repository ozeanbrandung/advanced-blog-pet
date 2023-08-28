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

type THeadersTags = 'h1' | 'h2' | 'h3';

export enum TextSize {
    M = 'M',
    L = 'L',
    S = 'S'
}

const tagsMap:Record<TextSize, THeadersTags> = {
    [TextSize.L]: 'h1',
    [TextSize.M]: 'h2',
    [TextSize.S]: 'h3'
};

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    isError?: boolean;
    align?: TextAlign;
    size?: TextSize;
    titleClassName?: string;
    textClassName?: string;
    isCaption?: boolean;
    //theme?: TextTheme;
}

export const Text:FC<TextProps> = memo((props) => {
    const { className, title, text, isCaption, isError, align = TextAlign.LEFT, size = TextSize.M } = props;

    const HeaderTag = tagsMap[size];

    const TextTag = isCaption ? 'figcaption' : 'p';

    return (
        <div className={classNames(
            styles.Text,
            {[styles.errored]: isError},
            [className, styles[align], styles[size]]
        )}>
            {title && (
                <HeaderTag className={classNames(styles.title, {}, [props.titleClassName])}>
                    {title}
                </HeaderTag>
            )}

            {text && (
                <TextTag className={classNames(styles.text, {}, [props.textClassName])}>
                    {text}
                </TextTag>
            )}
        </div>
    );
});
