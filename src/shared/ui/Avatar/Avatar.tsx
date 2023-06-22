import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';

export enum AvatarModes {
    BIG = 'big',
    SMALL = 'small'
}

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    mode?: AvatarModes;
}

export const Avatar:FC<AvatarProps> = (props) => {
    const { className, src, alt, mode = AvatarModes.SMALL } = props;

    return (
        <img
            className={classNames(styles.Avatar, {}, [className, styles[mode]])}
            src={src}
            alt={alt}
            loading='lazy'
        />
    );
};
