import {FC, memo, useMemo} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlesList.module.scss';
import {ArticlesViewMode, IArticle} from '../../model/types/article';
import {ArticlesListItem} from '../ArticlesListItem/ArticlesListItem';
import {ArticlesListItemSkeleton} from '../ArticlesListItem/ArticlesListItemSkeleton';
import {Text} from 'shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation('article');

    const memoedArticles = useMemo(() => {
        return articles.map(article => (
            <ArticlesListItem className={styles.article} key={article.id} article={article} viewMode={viewMode} />
        ));
    }, [articles, viewMode]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.ArticlesList, {}, [className, styles[viewMode]])}>
                <Text text={t('noArticles')}/>
            </div>
        );

    }

    return (
        <div className={classNames(styles.ArticlesList, {}, [className, styles[viewMode]])}>
            {memoedArticles}
            {isLoading && getArticleSkeletons(viewMode)}
        </div>
    );

    return null;
});
