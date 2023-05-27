import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutesPaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    //любой другой роут если не было введено предыдущих
    //TODO: держать этот роут последним в списке!
    [AppRoutes.NOT_FOUND]: '*'
};

export const routesConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPaths.about,
        element: <AboutPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPaths.not_found,
        element: <PageNotFound />
    }
};
