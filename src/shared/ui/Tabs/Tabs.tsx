import {FC, memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import styles from './Tabs.module.scss';
import {Card, CardTheme} from '../../ui/Card/Card';

export interface ITab {
    value: string;
    label: string;
}

interface TabsProps {
    className?: string;
    tabs: ITab[];
    selectedTabValue: string;
    onTabClick(value: string): void;
}

export const Tabs:FC<TabsProps> = memo((props) => {
    const {
        className,
        onTabClick,
        tabs,
        selectedTabValue
    } = props;

    const handleClick = useCallback((value:string) => {
        return () => {
            onTabClick(value);
        };
    }, [onTabClick]);

    return (
        <div className={classNames(styles.Tabs, {}, [className])}>
            {tabs.map(tab => (
                <Card
                    theme={tab.value === selectedTabValue ? CardTheme.OUTLINED : CardTheme.NORMAL}
                    className={classNames(
                        styles.tab,
                        //{[styles.selected]: tab.value === selectedTabValue}
                    )}
                    key={tab.value}
                    onClick={handleClick(tab.value)}
                >
                    {tab.label}
                </Card>
            ))}
        </div>
    );
});
