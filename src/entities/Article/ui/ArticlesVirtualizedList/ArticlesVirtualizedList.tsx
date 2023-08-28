import {FC, HTMLAttributeAnchorTarget, memo} from 'react';
import styles from './ArticlesVirtualizedList.module.scss';
import {Virtuoso} from 'react-virtuoso';
import {ArticlesViewMode, IArticle} from 'entities/Article';
import {ArticlesListItem} from 'entities/Article/ui/ArticlesListItem/ArticlesListItem';
import {ArticlesListItemSkeleton} from 'entities/Article/ui/ArticlesListItem/ArticlesListItemSkeleton';

interface ArticlesVirtualizedListProps {
    className?: string;
    articles: IArticle[];
    target?: HTMLAttributeAnchorTarget;
    viewMode: ArticlesViewMode;
    isLoading?: boolean;
    loadMore?: () => void;
}

export const ArticlesVirtualizedList:FC<ArticlesVirtualizedListProps> = memo((props) => {
    const {loadMore = () => console.log('load more'), articles, target, isLoading, viewMode} = props;
    //const {t} = useTranslation('default');
    return (
        // <div className={classNames(styles.ArticlesVirtualizedList, {}, [className])}>
        <Virtuoso
            useWindowScroll
            data={articles}
            overscan={200}
            totalCount={articles.length}
            customScrollParent={document.getElementById('page') as HTMLElement}
            endReached={loadMore}
            itemContent={(index, article) => (
                <>
                    <ArticlesListItem
                        target={target}
                        className={styles.article}
                        key={article.id}
                        article={article}
                        viewMode={viewMode}
                    />
                    {isLoading && new Array(3).fill(0).map((_, idx) =>
                        <ArticlesListItemSkeleton key={idx} viewMode={viewMode} />
                    )}
                </>
            )}
        />
        // </div>
    );
});
