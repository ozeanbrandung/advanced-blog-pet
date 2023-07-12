import {FC, ReactNode, useRef} from 'react';
//import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import {useIntersection} from 'shared/hooks/useIntersection/useIntersection';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page:FC<PageProps> = (props) => {
    const { className, children, onScrollEnd} = props;
    //const {t} = useTranslation('default');

    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    useIntersection(rootRef, triggerRef, onScrollEnd);

    return (
        <section ref={rootRef} className={classNames(styles.Page, {}, [className])}>
            {children}
            {onScrollEnd && (
                <div className={styles.trigger} ref={triggerRef}/>
            )}
        </section>
    );
};
