import React, { FC, memo, ReactNode } from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
    children: ReactNode;
}

export const AppLink:FC<AppLinkProps> = memo((props) => {
    const {
        children,
        to,
        className,
        theme = AppLinkThemes.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(
                styles.AppLink,
                {},
                [className, styles[theme]]
            )}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});


