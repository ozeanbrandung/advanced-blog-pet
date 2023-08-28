import {FC, HTMLAttributeAnchorTarget, memo} from 'react';
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
import {AppRoutes} from 'shared/config/routesConfig/routesConfig';
import {AppLink} from 'shared/ui/AppLink/AppLink';

interface ArticlesListItemProps {
    className?: string;
    article: IArticle;
    viewMode: ArticlesViewMode;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem:FC<ArticlesListItemProps> = memo((props) => {
    const { className, article, target, viewMode } = props;
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

    //const navigate = useNavigate();

    // const handleNavigateToArticle = useCallback(() => {
    //     //TODO: тут вообще ничего не происходит - на странице рекомендаций
    //     navigate(`/${AppRoutes.ARTICLES}/${article.id}`, {});
    // }, [article.id, navigate]);
    
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

                <figure className={styles.imageWrapper}>
                    <img className={styles.image} src={article.img} alt={article.title} />
                </figure>

                {paragraph && (
                    <ArticleTextBlock block={paragraph} className={styles.contentPreview} />
                )}
                
                <div className={styles.bottom}>
                    <AppLink target={target} to={'/' + AppRoutes.ARTICLES + '/' + article.id}>
                        <Button theme={ButtonThemes.OUTLINE} /*onClick={handleNavigateToArticle}*/>
                            {t('readMore')}
                        </Button>
                    </AppLink>

                    {views}
                </div>
            </Card>
        );
    }

    if (viewMode === ArticlesViewMode.GRID) {
        return (
            <AppLink to={'/' + AppRoutes.ARTICLES + '/' + article.id} target={target}>
                <Card
                    //onClick={handleNavigateToArticle}
                    className={classNames(styles.ArticlesListItem, {}, [className, styles[viewMode]])}
                >
                    <figure className={styles.imageWrapper}>
                        <img className={styles.image} src={article.img} alt={article.title} />
                        <Text isCaption text={article.createdAt} className={styles.date} />
                    </figure>
                    <div className={styles.cardContent}>
                        <div className={styles.cardBottom}>
                            {types}
                            {views}
                        </div>
                        <Text title={article.title} titleClassName={styles.title} />
                    </div>
                </Card>
            </AppLink>
        );
    }

    return null;
});
