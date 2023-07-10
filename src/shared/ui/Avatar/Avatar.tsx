import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import {useTranslation} from 'react-i18next';

export enum AvatarModes {
    BIG = 'big',
    SMALL = 'small'
}

const USER_NO_PHOTO_PATH = '/imgs/user-no-photo.jpg';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    mode?: AvatarModes;
}

export const Avatar:FC<AvatarProps> = (props) => {
    const { className, src, alt, mode = AvatarModes.SMALL } = props;
    const {t} = useTranslation('default');

    if (src) {
        return (
            <img
                className={classNames(styles.Avatar, {}, [className, styles[mode]])}
                src={src}
                alt={alt}
                loading='lazy'
            />
        );
    }

    return (
        <img
            className={classNames(styles.Avatar, {}, [className, styles[mode]])}
            src={__PUBLIC_URL__ + USER_NO_PHOTO_PATH}
            alt={t('noImage')}
        />
    );
};
