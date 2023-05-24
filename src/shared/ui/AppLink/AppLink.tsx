import React, {FC} from 'react';
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss";

export enum AppLinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkThemes;
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        className,
        theme = AppLinkThemes.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};


