import {FC, HTMLAttributeAnchorTarget, memo, useMemo} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesList.module.scss';
import {ArticlesViewMode, IArticle} from '../../model/types/article';
import {ArticlesListItem} from '../ArticlesListItem/ArticlesListItem';
import {ArticlesListItemSkeleton} from '../ArticlesListItem/ArticlesListItemSkeleton';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';
import {ArticlesVirtualizedList} from 'entities/Article/ui/ArticlesVirtualizedList/ArticlesVirtualizedList';
import {ArticlesVirtualizedGrid} from 'entities/Article/ui/ArticlesVirtualizedGrid/ArticlesVirtualizedGrid';

interface ArticlesListProps {
    className?: string;
    articles: IArticle[];
    viewMode: ArticlesViewMode;
    isLoading: boolean;
    target?: HTMLAttributeAnchorTarget;
    loadMore?: () => void;
    isVirtual?: boolean;
}

const getArticleSkeletons = (viewMode:ArticlesViewMode) => {
    if (viewMode === ArticlesViewMode.LIST) {
        return (
            <>
                {new Array(3).fill(0).map((_, idx) =>
                    <ArticlesListItemSkeleton key={idx} viewMode={viewMode} />
                )}
            </>
        );
    }
    if (viewMode === ArticlesViewMode.GRID) {
        return (
            <>
                {new Array(9).fill(0).map((_, idx) =>
                    <ArticlesListItemSkeleton key={idx} viewMode={viewMode} />
                )}
            </>
        );
    }
    return null;
};

export const ArticlesList:FC<ArticlesListProps> = memo((props) => {
    const { className, loadMore, isVirtual = false, isLoading, articles, target, viewMode } = props;
    const {t} = useTranslation('article');

    const memoedArticles = useMemo(() => {
        return isVirtual ? [] : articles.map(article => (
            <ArticlesListItem
                target={target}
                className={styles.article}
                key={article.id}
                article={article}
                viewMode={viewMode}
            />
        ));
    }, [articles, viewMode, isVirtual]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticlesList, {}, [className, styles[viewMode]])}>
                <Text text={t('noArticles')}/>
            </div>
        );

    }

    return (
        <div className={classNames(styles.ArticlesList, {}, [className, styles[viewMode]])}>
            {viewMode === ArticlesViewMode.LIST && isVirtual && (
                <ArticlesVirtualizedList
                    articles={articles}
                    viewMode={viewMode}
                    isLoading={isLoading}
                    target={'_blank'}
                    loadMore={loadMore}
                />
            )}

            {viewMode === ArticlesViewMode.GRID && isVirtual && (
                <ArticlesVirtualizedGrid
                    articles={articles}
                    viewMode={viewMode}
                    isLoading={isLoading}
                    target={'_blank'}
                    loadMore={loadMore}
                />
            )}

            {!isVirtual && (
                <>
                    {memoedArticles}
                    {isLoading && getArticleSkeletons(viewMode)}
                </>
            )}


        </div>
    );

    return null;
});
