import {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticlesListItem.module.scss';
import {ArticlesViewMode, BlockTypes, IArticle, TextArticleBlock} from '../../model/types/article';
import {Card} from 'shared/ui/Card/Card';
import {Avatar, AvatarModes} from 'shared/ui/Avatar/Avatar';
import {Button, ButtonThemes} from 'shared/ui/Button/Button';
import ViewsIcon from 'shared/assets/icons/views.svg';
import {Text} from 'shared/ui/Text/Text';
import {ArticleTextBlock} from '../ArticleTextBlock/ArticleTextBlock';
import {useNavigate} from 'react-router-dom';

interface ArticlesListItemProps {
    className?: string;
    article: IArticle;
    viewMode: ArticlesViewMode;
}

export const ArticlesListItem:FC<ArticlesListItemProps> = memo((props) => {
    const { className, article, viewMode } = props;
    const {t} = useTranslation('article');

    const paragraph = article.blocks.find(item => item.type === BlockTypes.TEXT) as TextArticleBlock;
    
    const types = (
        <div className={styles.types}>
            {article.type.join(', ')}
        </div>
    );
    
    const views = (
        <div className={styles.views}>
            <Text text={String(article.views)} className={styles.views} />
            <ViewsIcon className={styles.icon} />
        </div>
    );

    const navigate = useNavigate();

    const handleNavigateToArticle = useCallback(() => {
        navigate(`${article.id}`);
    }, [article.id, navigate]);
    
    if (viewMode === ArticlesViewMode.LIST) {
        return (
            <Card className={classNames(styles.ArticlesListItem, {}, [className, styles[viewMode]])}>
                <div className={styles.header}>
                    <div className={styles.headerTop}>
                        <Avatar mode={AvatarModes.SMALL} className={styles.avatar} src={article.user.avatar}/>
                        <Text text={article.user.username} className={styles.username} />
                        <Text text={article.createdAt} className={styles.date} />
                    </div>
                    <Text title={article.title} titleClassName={styles.title} />
                    {types}
                </div>

                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={article.img} alt={article.title} />
                </div>

                {paragraph && (
                    <ArticleTextBlock block={paragraph} className={styles.contentPreview} />
                )}
                
                <div className={styles.bottom}>
                    <Button theme={ButtonThemes.OUTLINE} onClick={handleNavigateToArticle}>
                        {t('readMore')}
                    </Button>

                    {views}
                </div>
            </Card>
        );
    }

    if (viewMode === ArticlesViewMode.GRID) {
        return (
            <Card
                onClick={handleNavigateToArticle}
                className={classNames(styles.ArticlesListItem, {}, [className, styles[viewMode]])}
            >
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardBottom}>
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} titleClassName={styles.title} />
                </div>
            </Card>
        );
    }

    return null;
});
