import React, {FC, useMemo, useState} from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';

//пытаемся получить из LocalStorage (причем с приведением типов потому что там любая может быть страка),
// если в localStorage ничего нет то мы тупа ставим светлую тему по дефолту
const defaultTheme = localStorage
    .getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
}

//нам нужно иметь глобальный доступ с любого компонента к темам
const ThemeProvider:FC<ThemeProviderProps> = ({
    children,
    initialTheme
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);
    //на каждый рендер компонента объект будет пересоздаваться - замемоизируем чтобы предотвратить ререндоры
    return (
        // <ThemeContext.Provider value={{
        //     theme,
        //     setTheme,
        // }}>
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
