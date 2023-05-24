import Counter from "./componets/Counter";
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import LazyAboutPageComponent from "./pages/AboutPage.async";
import LazyMainPageComponent from "./pages/MainPage.async";
import {ReactNode, Suspense, useContext, useState} from "react";
import './styles/index.scss';
import {Theme, ThemeContext} from "./theme/ThemeContext";
import useTheme from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to='/about' >About</Link>
            <Link to='/'>Main</Link>
            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path='/about' element={<LazyAboutPageComponent/>} />
                    <Route path='/' element={<LazyMainPageComponent/>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
