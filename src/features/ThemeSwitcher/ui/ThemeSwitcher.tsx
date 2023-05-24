import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import {Button, ButtonThemes} from "shared/ui/Button/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';
import IconThemeLight from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ButtonThemes.INITIAL}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <IconThemeLight /> : <IconThemeDark />}
        </Button>
    );
};
