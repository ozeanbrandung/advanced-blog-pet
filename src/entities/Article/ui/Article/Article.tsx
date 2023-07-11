import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Avatar, AvatarModes} from 'shared/ui/Avatar/Avatar';
import {Text, TextSize} from 'shared/ui/Text/Text';
import IconViews from 'shared/assets/icons/views.svg';
import IconCalendar from 'shared/assets/icons/calendar.svg';
import {ArticleBlocks, BlockTypes, IArticle} from '../../model/types/article';
import {ArticleCodeBlock} from '../ArticleCodeBlock/ArticleCodeBlock';
import {ArticleImageBlock} from '../ArticleImageBlock/ArticleImageBlock';
import {ArticleTextBlock} from '../ArticleTextBlock/ArticleTextBlock';
import styles from './Article.module.scss';
import {Button, ButtonThemes} from 'shared/ui/Button/Button';
import {useNavigate} from 'react-router-dom';
import {AppRoutes} from 'shared/config/routesConfig/routesConfig';
import {useTranslation} from 'react-i18next';

interface ArticleProps {
    className?: string;
    data: IArticle;
}

export const Article:FC<ArticleProps> = memo((props) => {
    const { className, data } = props;
    const {t} = useTranslation('article');

    const getContentBlocks = useCallback((block: ArticleBlocks) => {
        switch (block.type) {
        case BlockTypes.CODE:
            return <ArticleCodeBlock key={block.id} className={styles.block} block={block} />;
        case BlockTypes.IMAGE:
            return <ArticleImageBlock key={block.id} className={styles.block} block={block} />;
        case BlockTypes.TEXT:
            return <ArticleTextBlock key={block.id} className={styles.block} block={block} />;
        default:
            return null;
        }
    }, []);

    const navigate = useNavigate();

    const handleNavigateToList = useCallback(() => {
        navigate(`/${AppRoutes.ARTICLES}`);
    }, [navigate]);

    return (
        <div className={classNames(styles.Article, {}, [className])}>
            <Button onClick={handleNavigateToList} theme={ButtonThemes.OUTLINE}>{t('navigateBackButton')}</Button>

            <Avatar className={styles.avatar} src={data.img} mode={AvatarModes.BIG} />

            <Text className={styles.titles} title={data.title} text={data.subtitle} size={TextSize.L} />

            <div className={styles.info}>
                <IconViews className={styles.icon}/>
                <Text text={String(data.views)} />
            </div>

            <div className={styles.info}>
                <IconCalendar className={styles.icon}/>
                <Text text={data.createdAt} />
            </div>

            <div className={styles.blocksContainer}>
                {data.blocks.map(getContentBlocks)}
            </div>
        </div>
    );
});
