import {FC} from 'react';
//import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
//import styles from './ArticleCodeBlock.module.scss';
import { CodeArticleBlock } from '../../model/types/article';
import { Code } from 'shared/ui/Code/Code';

interface ArticleCodeBlockProps {
    className?: string;
    block: CodeArticleBlock;
}

export const ArticleCodeBlock:FC<ArticleCodeBlockProps> = (props) => {
    const { className, block } = props;
    //const {t} = useTranslation('default');

    return (
        <div className={classNames('', {}, [className])}>
            <Code codeText={block.code} />
        </div>
    );
};
