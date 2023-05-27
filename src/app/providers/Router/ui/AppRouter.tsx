import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routesConfig/routesConfig';
import {PageLoader} from 'widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/*<Route path='/about' element={<AboutPage/>} />*/}
                {/*<Route path='/' element={<MainPage/>} />*/}
                {Object.values(routesConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

//export default AppRouter;
