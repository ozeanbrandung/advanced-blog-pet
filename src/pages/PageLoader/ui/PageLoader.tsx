import {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';
import {Loader} from 'shared/ui/Loader/Loader';
import { Page } from 'shared/ui/Page/Page';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader:FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <Page>
            <div className={classNames(styles.PageLoader, {}, [className])}>
                <Loader />
            </div>
        </Page>
    );
};
