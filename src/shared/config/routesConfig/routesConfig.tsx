import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import {ArticleEditPage} from 'pages/ArticleEditPage';


export interface CustomRouteProps extends RouteProps {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_EDIT = 'article-edit',
    ARTICLE_CREATE = 'article-create',
    ARTICLE_DETAILS = 'article-details',
    PROFILE_DETAILS = 'profile-details',
    //last
    NOT_FOUND = 'not_found',
}

export const RoutesPaths:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.PROFILE_DETAILS]: '/profile/:id',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/:id', //:id
    //любой другой роут если не было введено предыдущих
    //TODO: держать этот роут последним в списке!
    [AppRoutes.NOT_FOUND]: '*'
};

export const routesConfig:Record<AppRoutes, CustomRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPaths.about,
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE_DETAILS]: {
        path: RoutesPaths['profile-details'],
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutesPaths.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutesPaths['article-details'],
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutesPaths['article-edit'],
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutesPaths['article-create'],
        element: <ArticleEditPage />,
        authOnly: true
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutesPaths.not_found,
        element: <PageNotFound />
    }
};
