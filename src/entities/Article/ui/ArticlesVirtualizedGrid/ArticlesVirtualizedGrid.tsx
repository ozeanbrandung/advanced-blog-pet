import {FC, HTMLAttributeAnchorTarget, memo} from 'react';
import styles from './ArticlesVirtualizedGrid.module.scss';
import {VirtuosoGrid} from 'react-virtuoso';
import {ArticlesViewMode, IArticle} from '../../model/types/article';
import {ArticlesListItem} from '../ArticlesListItem/ArticlesListItem';
import {ArticlesListItemSkeleton} from '../ArticlesListItem/ArticlesListItemSkeleton';

interface ArticlesVirtualizedListProps {
    className?: string;
    articles: IArticle[];
    target?: HTMLAttributeAnchorTarget;
    viewMode: ArticlesViewMode;
    isLoading?: boolean;
    loadMore?: () => void;
}

export const ArticlesVirtualizedGrid:FC<ArticlesVirtualizedListProps> = memo((props) => {
    const { loadMore = () => console.log('load more'), articles, target, isLoading, viewMode} = props;

    return (
        // <div className={classNames(styles.ArticlesVirtualizedList, {}, [className])}>
        <VirtuosoGrid
            useWindowScroll
            overscan={200}
            data={articles}
            totalCount={articles.length}
            customScrollParent={document.getElementById('page') as HTMLElement}
            endReached={loadMore}
            itemClassName={styles.article}
            listClassName={styles.ArticlesVirtualizedGrid}
            components={{
                // Item: ItemContainer,
                // List: ListContainer,
                //if scroll quickly
                ScrollSeekPlaceholder: (/*{ height, width, index }*/) => (
                    <div>{'--'}</div>
                ),
            }}
            itemContent={(index, article) => (
                <div>
                    <ArticlesListItem
                        target={target}
                        //className={styles.article}
                        key={article.id}
                        article={article}
                        viewMode={viewMode}
                    />
                    {isLoading && new Array(9).fill(0).map((_, idx) =>
                        <ArticlesListItemSkeleton key={idx} viewMode={viewMode} />
                    )}
                </div>
            )}
        />
        // </div>
    );
});
