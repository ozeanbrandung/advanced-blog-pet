import {FC, memo} from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticlesListItem.module.scss';
import {ArticlesViewMode} from '../../model/types/article';
import {Card} from 'shared/ui/Card/Card';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface ArticlesListItemSkeletonProps {
    className?: string;
    viewMode: ArticlesViewMode;
}

export const ArticlesListItemSkeleton:FC<ArticlesListItemSkeletonProps> = memo((props) => {
    const { className, viewMode} = props;
    //const {t} = useTranslation('default');

    if (viewMode === ArticlesViewMode.LIST) {
        return (
            <Card className={classNames(styles.ArticlesListItem, {}, [className, styles[viewMode], styles.skeleton])}>
                <div className={styles.header}>
                    <div className={styles.headerTop}>
                        <Skeleton className={styles.avatar} width={40} height={40} />
                        <Skeleton width={150} height={30} />
                        <Skeleton height={30} width={150} className={styles.date} />
                    </div>
                    <Skeleton width={300} height={30} className={styles.title} />
                    <Skeleton width={100} height={30} className={styles.types} />
                </div>

                <div className={styles.imageWrapper}>
                    <Skeleton width={'100%'} height={'200px'} className={styles.image} />
                </div>

                <Skeleton width={'100%'} height={'100px'} className={styles.contentPreview} />

                {/*<div className={styles.bottom}>*/}
                {/*    <Button theme={ButtonThemes.OUTLINE} onClick={handleNavigateToArticle}>*/}
                {/*        {t('readMore')}*/}
                {/*    </Button>*/}

                {/*    {views}*/}
                {/*</div>*/}
            </Card>
        );
    }

    if (viewMode === ArticlesViewMode.GRID) {
        return (
            <Card
                className={classNames(styles.ArticlesListItem, {}, [className, styles[viewMode]])}
            >
                <div className={styles.imageWrapper}>
                    <Skeleton width={'100%'} height={'200px'} className={styles.image} />
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardBottom}>
                        <Skeleton width={'60%'} height={30} className={styles.types} />
                        <Skeleton width={'30%'} height={30} className={styles.views} />
                    </div>
                    <Skeleton width={'100%'} height={30} className={styles.title} />
                </div>
            </Card>
        );
    }

    return null;
});
