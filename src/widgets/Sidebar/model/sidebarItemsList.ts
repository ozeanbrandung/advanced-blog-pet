import { SidebarItemType } from 'widgets/Sidebar/model/SidebarItemType';
import { RoutesPaths } from 'shared/config/routesConfig/routesConfig';
import IconHome from 'shared/assets/icons/home.svg';
import IconAbout from 'shared/assets/icons/about.svg';
import IconProfile from 'shared/assets/icons/profile.svg';
import IconArticles from 'shared/assets/icons/articles.svg';

export const sidebarItemsList:SidebarItemType[] = [
    {
        path: RoutesPaths.main,
        textTranslationKey: 'Main',
        Icon: IconHome
    },
    {
        path: RoutesPaths.profile,
        textTranslationKey: 'Profile',
        Icon: IconProfile,
        isAuthOnly: true,
    },
    {
        path: RoutesPaths.about,
        textTranslationKey: 'About',
        Icon: IconAbout
    },
    {
        path: RoutesPaths.articles,
        textTranslationKey: 'Articles',
        Icon: IconArticles,
        isAuthOnly: true,
    }
];
