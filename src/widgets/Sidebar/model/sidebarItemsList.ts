import { SidebarItemType } from 'widgets/Sidebar/model/SidebarItemType';
import { RoutesPaths } from 'shared/config/routesConfig/routesConfig';
import IconHome from 'shared/assets/icons/home.svg';
import IconAbout from 'shared/assets/icons/about.svg';
import IconProfile from 'shared/assets/icons/profile.svg';

export const sidebarItemsList:SidebarItemType[] = [
    {
        path: RoutesPaths.main,
        textTranslationKey: 'Main',
        Icon: IconHome
    },
    {
        path: RoutesPaths.profile,
        textTranslationKey: 'Profile',
        Icon: IconProfile
    },
    {
        path: RoutesPaths.about,
        textTranslationKey: 'About',
        Icon: IconAbout
    }
];
