import { RoutesPaths } from 'shared/config/routesConfig/routesConfig';
import { useSelector } from 'react-redux';
import { getUserAuthDataSelector } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const isAuth = useSelector(getUserAuthDataSelector);

    //const location = useLocation();

    if (!isAuth) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={RoutesPaths.main} /* state={{ from: location }}*/ replace />;
    }

    return <>{children}</>;
};
