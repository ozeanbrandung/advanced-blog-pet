import React, {FC, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import {ThemeSwitcher} from 'features/ThemeSwitcher';
import {LangSwitcher} from 'features/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div data-testid="sidebar" className={classNames(
            styles.Sidebar,
            {[styles.collapsed]: collapsed},
            [className]
        )}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <button data-testid="sidebar-button" onClick={toggleCollapsed}>toggle</button>

            <div className={styles.switchers}>
                <ThemeSwitcher className={styles.switcher}/>
                <LangSwitcher className={styles.switcher} />
            </div>
        </div>
    );
};
