import React, {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss';
import {AppRouter} from "app/providers/Router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />

            <main className='main'>
                <Sidebar/>

                <div className="page-wrapper">
                    <AppRouter />
                </div>
            </main>
            {/*<button onClick={toggleTheme}>toggle</button>*/}
        </div>
    );
}

export default App;
