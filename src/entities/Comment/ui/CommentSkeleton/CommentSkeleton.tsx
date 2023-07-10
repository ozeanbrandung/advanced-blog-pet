import { FC, memo } from 'react';
//import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './CommentSkeleton.module.scss';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface CommentSkeletonProps {
    className?: string;
}

export const CommentSkeleton:FC<CommentSkeletonProps> = memo((props) => {
    const { className } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.CommentSkeleton, {}, [className])}>
            <div className={styles.header}>
                <Skeleton className={styles.avatar} width={50} height={50} />
                <Skeleton width={250} height={30} />
            </div>
            <Skeleton width={325} height={60} />
        </div>
    );
});
