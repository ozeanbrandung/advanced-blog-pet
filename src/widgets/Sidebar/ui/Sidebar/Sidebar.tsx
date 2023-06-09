import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonThemes } from 'shared/ui/Button/Button';
import { AppLink, AppLinkThemes } from 'shared/ui/AppLink/AppLink';
import { RoutesPaths } from 'shared/config/routesConfig/routesConfig';
import {useTranslation} from 'react-i18next';
import IconHome from 'shared/assets/icons/home.svg';
import IconAbout from 'shared/assets/icons/about.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation('default');

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(
            styles.Sidebar,
            {[styles.collapsed]: collapsed},
            [className]
        )}>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    className={styles.link}
                    to={RoutesPaths.main}
                >
                    <span className={styles.iconContainer}>
                        <IconHome/>
                    </span>
                    <span className={styles.linkText}>
                        {t('Main')}
                    </span>
                </AppLink>

                <AppLink
                    theme={AppLinkThemes.SECONDARY}
                    className={styles.link}
                    to={RoutesPaths.about}
                >
                    <span className={styles.iconContainer}>
                        <IconAbout/>
                    </span>
                    <span className={styles.linkText}>
                        {t('About')}
                    </span>
                </AppLink>
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
        </div>
    );
};
