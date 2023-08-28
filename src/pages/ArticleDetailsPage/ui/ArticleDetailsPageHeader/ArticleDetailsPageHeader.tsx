import {FC, memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './ArticleDetailsPageHeader.module.scss';
import {Button, ButtonThemes} from 'shared/ui/Button/Button';
import {useNavigate} from 'react-router-dom';
import {RoutesPaths} from 'shared/config/routesConfig/routesConfig';
import {useSelector} from 'react-redux';
import {getArticleEditSelector} from '../../model/selectors/articleEditSelector';
import {getArticleData} from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader:FC<ArticleDetailsPageHeaderProps> = memo((props) => {
    const { className } = props;
    const {t} = useTranslation('article');

    const navigate = useNavigate();
    const article = useSelector(getArticleData);

    const handleNavigateToList = useCallback(() => {
        //navigate(`/${AppRoutes.ARTICLES}`);
        navigate(RoutesPaths.articles);
    }, [navigate]);

    const handleNavigateEdit = useCallback(() => {
        //navigate(`/${AppRoutes.ARTICLE_EDIT}`);
        if (article?.id) {
            navigate(RoutesPaths['article-edit'].replace(':id', article.id));
        }
    }, [navigate, article?.id]);

    const isEditable = useSelector(getArticleEditSelector);

    return (
        <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
            <Button
                onClick={handleNavigateToList}
                theme={ButtonThemes.OUTLINE}
            >
                {t('navigateBackButton')}
            </Button>

            {isEditable && (
                <Button
                    onClick={handleNavigateEdit}
                    theme={ButtonThemes.OUTLINE}
                >
                    {t('navigateEditButton')}
                </Button>
            )}
        </div>
    );
});
