import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { TextArticleBlock } from '../../model/types/article';
import styles from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string;
    block: TextArticleBlock;
}

export const ArticleTextBlock:FC<ArticleTextBlockProps> = ({block, className}) => {
    //const { className } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames(styles.ArticleTextBlock, {}, [className])}>
            {block.title && (
                <Text className={styles.title} title={block.title} />
            )}
            {block.paragraphs.map((item, idx) => (
                <Text className={styles.paragraph} key={idx} text={item} />
            ))}
        </div>
    );
};
