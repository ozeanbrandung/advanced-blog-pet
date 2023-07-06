import { FC } from 'react';
//import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ImageArticleBlock } from '../../model/types/article';
import styles from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ImageArticleBlock;
}

export const ArticleImageBlock:FC<ArticleImageBlockProps> = (props) => {
    const { className, block } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.ArticleImageBlock, {}, [className])}>
            <img className={styles.img} src={block.src} alt={block.title} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER}/>
            )}
        </div>
    );
};
