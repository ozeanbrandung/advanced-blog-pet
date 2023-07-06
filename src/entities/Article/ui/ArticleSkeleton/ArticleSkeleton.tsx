import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './ArticleSkeleton.module.scss';

interface ArticleSkeletonProps {
    className?: string;
}

export const ArticleSkeleton:FC<ArticleSkeletonProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.ArticleSkeleton, {}, [className])}>
            <Skeleton className={styles.avatar} width={200} height={200} />
            <Skeleton className={styles.title} width={'61%'} height={31} />
            <Skeleton className={styles.subtitle} width={'37%'} height={31} />

            <Skeleton className={styles.text} width={'100%'} height={231} />
            <Skeleton className={styles.text} width={'100%'} height={231} />
        </div>
    );
};
