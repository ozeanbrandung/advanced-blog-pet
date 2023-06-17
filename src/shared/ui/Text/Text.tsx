import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss';

// export enum TextTheme {
//     DEFAULT = 'default',
//     ERRORED = 'errored'
// }

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    isError?: boolean;
    //theme?: TextTheme;
}

export const Text:FC<TextProps> = (props) => {
    const { className, title, text, isError } = props;

    return (
        <div className={classNames(styles.Text, {[styles.errored]: isError}, [className])}>
            {title && (
                <h2 className={styles.title}>
                    {title}
                </h2>
            )}

            {text && (
                <div className={styles.text}>
                    {text}
                </div>
            )}
        </div>
    );
};
