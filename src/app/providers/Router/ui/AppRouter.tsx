import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {routesConfig} from "shared/config/routesConfig/routesConfig";

export const AppRouter = () => {
    return (
        <Routes>
            {/*<Route path='/about' element={<AboutPage/>} />*/}
            {/*<Route path='/' element={<MainPage/>} />*/}
            {Object.values(routesConfig).map(({path, element}) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

//export default AppRouter;
