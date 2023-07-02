import { useContext, useEffect } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

const useTheme = ():UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        //состояние нужно не просто поменять его нужно сохранить еще в локал сторадж
        //const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        let newTheme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.MAGENTA;
            break;
        case Theme.MAGENTA:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }
        //контекст инициализируется не сразу и в какой-то момент времени он пустой у нас
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme
    };
};

export default useTheme;
