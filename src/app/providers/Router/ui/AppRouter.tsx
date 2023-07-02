import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CustomRouteProps, routesConfig } from 'shared/config/routesConfig/routesConfig';
import { PageLoader } from 'widgets/PageLoader';
import { ProtectedRoute } from 'app/providers/Router/ui/ProtectedRoute';

export const AppRouter = memo(() => {
    // const isAuth = useSelector(getUserAuthDataSelector);
    //
    // const availableRoutes = useMemo(() => (
    //     Object.values(routesConfig)
    //         .filter(({authOnly = false}) => !authOnly || authOnly && isAuth)
    // ), [isAuth]);
    const getAvailableRoutes = useCallback(({path, element, authOnly}: CustomRouteProps) => {
        const elem = authOnly ?
            <ProtectedRoute>
                {element}
            </ProtectedRoute>
            : element;

        return (
            <Route key={path} path={path} element={elem} />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/*<Route path='/about' element={<AboutPage/>} />*/}
                {/*<Route path='/' element={<MainPage/>} />*/}
                {Object.values(routesConfig).map(getAvailableRoutes)}
            </Routes>
        </Suspense>
    );
});

//export default AppRouter;
