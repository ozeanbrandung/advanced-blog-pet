import React, {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss';
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <Suspense fallback={'Loading...'}>
                <AppRouter />
            </Suspense>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    );
}

export default App;
