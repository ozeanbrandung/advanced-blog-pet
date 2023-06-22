import { memo, Suspense, useMemo } from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routesConfig/routesConfig';
import {PageLoader} from 'widgets/PageLoader';
import { getUserAuthDataSelector } from 'entities/User';
import { useSelector } from 'react-redux';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthDataSelector);

    const availableRoutes = useMemo(() => (
        Object.values(routesConfig)
            .filter(({authOnly = false}) => !authOnly || authOnly && isAuth)
    ), [isAuth]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/*<Route path='/about' element={<AboutPage/>} />*/}
                {/*<Route path='/' element={<MainPage/>} />*/}
                {availableRoutes.map(({path, element}) => {
                    return (
                        <Route key={path} path={path} element={element} />
                    );
                })}
            </Routes>
        </Suspense>
    );
});

//export default AppRouter;
