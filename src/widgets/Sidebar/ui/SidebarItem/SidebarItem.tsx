import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './SidebarItem.module.scss';
import { useSelector } from 'react-redux';
import { getUserAuthDataSelector } from 'entities/User';
import {SidebarItemType} from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem:FC<SidebarItemProps> = memo((props) => {
    const {textTranslationKey, Icon, path, isAuthOnly} = props.item;
    const {t} = useTranslation('default');

    const isAuth = useSelector(getUserAuthDataSelector);

    if (isAuthOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkThemes.SECONDARY}
            className={classNames(styles.SidebarItem, {[styles.collapsed]: props.collapsed})}
            to={path}
        >
            <span className={styles.iconContainer}>
                {/*<IconHome/>*/}
                <Icon />
                {/* React.createElement(icon) */}
            </span>
            <span className={styles.linkText}>
                {t(textTranslationKey)}
            </span>
        </AppLink>
    );
});
