import {FC, ReactNode, UIEvent, useRef} from 'react';
//import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Page.module.scss';
import {useIntersection} from 'shared/hooks/useIntersection/useIntersection';
import {useSelector} from 'react-redux';
import {StateSchema} from 'app/providers/StoreProvider';
import {getPreservesScrollPositionByPath} from '../model/selectors/preservedScrollPositionSelectors';
import {useLocation} from 'react-router-dom';
import {useAppDispatch} from 'shared/hooks/useAppDispatch/useAppDispatch';
import {useThrottle} from 'shared/hooks/useThrottle/useThrottle';
import {preservedScrollPositionActions} from '../model/slice/preservedScrollPositionSlice';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    isScrollPositionSaved?: boolean;
}

export const Page:FC<PageProps> = (props) => {
    const { className, children, onScrollEnd, isScrollPositionSaved = false} = props;
    //const {t} = useTranslation('default');
    const {pathname} = useLocation();

    const preservedScrollPosition = useSelector(
        (state:StateSchema) => getPreservesScrollPositionByPath(state, pathname)
    );
    const dispatch = useAppDispatch();

    const rootRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLDivElement | null>(null);

    useIntersection(rootRef, triggerRef, onScrollEnd);

    const handlePreserveScrollPosition = useThrottle((e: UIEvent<HTMLDivElement>) => {
        //if (isScrollPositionSaved) {
        dispatch(preservedScrollPositionActions.setNewScrollPosition({
            pageAddress: pathname,
            scrollTopPosition: e.currentTarget.scrollTop
        }));
        //}
    }, 700);

    useInitialEffect(() => {
        if (rootRef.current && isScrollPositionSaved) {
            rootRef.current.scrollTop = preservedScrollPosition;
        }
    });

    return (
        <section
            id='page'
            onScroll={isScrollPositionSaved ? handlePreserveScrollPosition : undefined}
            ref={rootRef}
            className={classNames(styles.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && (
                <div className={styles.trigger} ref={triggerRef}/>
            )}
        </section>
    );
};
