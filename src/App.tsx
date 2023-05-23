import Counter from "./componets/Counter";
import './index.scss';
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import LazyAboutPageComponent from "./pages/AboutPage.async";
import LazyMainPageComponent from "./pages/MainPage.async";
import {ReactNode, Suspense} from "react";

const App = () => {
    return (
        <div className='app'>
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
