import { CSSProperties, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width: number | string;
    height: number | string;
    radius?: string;
}

export const Skeleton:FC<SkeletonProps> = (props) => {
    const { className, width, height, radius } = props;

    const stylesObj:CSSProperties = {
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        borderRadius: radius,
    };

    return (
        <div
            style={stylesObj}
            className={classNames(styles.Skeleton, {}, [className])}
        />
    );
};
