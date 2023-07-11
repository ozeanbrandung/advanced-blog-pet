import {FC, memo, useMemo} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesList.module.scss';
import {ArticlesViewMode, IArticle} from '../../model/types/article';
import {ArticlesListItem} from '../ArticlesListItem/ArticlesListItem';
import {ArticlesListItemSkeleton} from '../ArticlesListItem/ArticlesListItemSkeleton';

interface ArticlesListProps {
    className?: string;
    articles: IArticle[];
    viewMode: ArticlesViewMode;
    isLoading: boolean;
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
    const { className, isLoading, articles, viewMode } = props;
    //const {t} = useTranslation('default');

    const memoedArticles = useMemo(() => {
        return articles.map(article => (
            <ArticlesListItem className={styles.article} key={article.id} article={article} viewMode={viewMode} />
        ));
    }, [articles, viewMode]);

    return (
        <div className={classNames(styles.ArticlesList, {}, [className, styles[viewMode]])}>
            {!isLoading ? memoedArticles : getArticleSkeletons(viewMode)}
        </div>
    );

    return null;
});
