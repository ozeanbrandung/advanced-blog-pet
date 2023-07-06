import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import IconCopy from 'shared/assets/icons/copy.svg';
import styles from './Code.module.scss';

interface CodeProps {
    className?: string;
    codeText: string;
}

export const Code:FC<CodeProps> = memo((props) => {
    const { className, codeText } = props;
    //const {t} = useTranslation('default');

    const handleCopyText = useCallback(() => {
        navigator.clipboard.writeText(codeText);
    }, [codeText]);

    return (
        <pre className={classNames(styles.Code, {}, [className])}>
            <Button onClick={handleCopyText} className={styles.copyBtn}><IconCopy /></Button>
            <code className={styles.codeText}>
                {/*Тег позволяет сохранить форматирование*/}
                {codeText}
            </code>
        </pre>
    );
});
