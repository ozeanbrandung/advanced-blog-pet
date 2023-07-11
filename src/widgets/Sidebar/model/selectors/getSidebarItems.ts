import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthDataSelector} from 'entities/User';
import {SidebarItemType} from 'widgets/Sidebar/model/types/sidebar';
import {RoutesPaths} from 'shared/config/routesConfig/routesConfig';
import IconHome from 'shared/assets/icons/home.svg';
import IconProfile from 'shared/assets/icons/profile.svg';
import IconAbout from 'shared/assets/icons/about.svg';
import IconArticles from 'shared/assets/icons/articles.svg';

export const getSidebarItems = createSelector(getUserAuthDataSelector, (userAuthData) => {
    const sidebarItemsList:SidebarItemType[] = [
        {
            path: RoutesPaths.main,
            textTranslationKey: 'Main',
            Icon: IconHome
        },
        {
            path: RoutesPaths.about,
            textTranslationKey: 'About',
            Icon: IconAbout
        },
    ];
    
    if (userAuthData) {
        sidebarItemsList.push({
            path: `${RoutesPaths.profile}/${userAuthData.id}`,
            textTranslationKey: 'Profile',
            Icon: IconProfile,
            isAuthOnly: true,
        },
        {
            path: RoutesPaths.articles,
            textTranslationKey: 'Articles',
            Icon: IconArticles,
            isAuthOnly: true,
        });
    }
    
    return sidebarItemsList;
});