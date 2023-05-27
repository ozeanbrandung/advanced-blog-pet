import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routesConfig} from 'shared/config/routesConfig/routesConfig';

export const AppRouter = () => {
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={'Loading...'}>
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
