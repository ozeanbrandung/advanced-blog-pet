import React, { FC, memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonThemes } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';
import {useSelector} from 'react-redux';
import {getSidebarItems} from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = memo((props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(
            styles.Sidebar,
            {[styles.collapsed]: collapsed},
            [className]
        )}>
            <div className={styles.links}>
                {sidebarItemsList.map(sidebarItem => (
                    <SidebarItem
                        key={sidebarItem.textTranslationKey}
                        item={sidebarItem}
                        collapsed={collapsed}
                    />
                ))}
                {/*<AppLink*/}
                {/*    theme={AppLinkThemes.SECONDARY}*/}
                {/*    className={styles.link}*/}
                {/*    to={RoutesPaths.main}*/}
                {/*>*/}
                {/*    <span className={styles.iconContainer}>*/}
                {/*        <IconHome/>*/}
                {/*    </span>*/}
                {/*    <span className={styles.linkText}>*/}
                {/*        {t('Main')}*/}
                {/*    </span>*/}
                {/*</AppLink>*/}

                {/*<AppLink*/}
                {/*    theme={AppLinkThemes.SECONDARY}*/}
                {/*    className={styles.link}*/}
                {/*    to={RoutesPaths.profile}*/}
                {/*>*/}
                {/*    <span className={styles.iconContainer}>*/}
                {/*        <IconHome/>*/}
                {/*    </span>*/}
                {/*    <span className={styles.linkText}>*/}
                {/*        {t('Profile')}*/}
                {/*    </span>*/}
                {/*</AppLink>*/}

                {/*<AppLink*/}
                {/*    theme={AppLinkThemes.SECONDARY}*/}
                {/*    className={styles.link}*/}
                {/*    to={RoutesPaths.about}*/}
                {/*>*/}
                {/*    <span className={styles.iconContainer}>*/}
                {/*        <IconAbout/>*/}
                {/*    </span>*/}
                {/*    <span className={styles.linkText}>*/}
                {/*        {t('About')}*/}
                {/*    </span>*/}
                {/*</AppLink>*/}
            </div>

            <Button
                data-testid="sidebar-button"
                onClick={toggleCollapsed}
                className={styles.collapseBtn}
                theme={ButtonThemes.BACKGROUND_INVERTED}
                isRound
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.switcher}/>
                <LangSwitcher
                    isShort={collapsed}
                    className={classNames(styles.switcher, {}, [styles.langSwitcher])}
                />
            </div>
        </aside>
    );
});
