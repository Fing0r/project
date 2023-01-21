import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/SidebarItem';

import { getAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getAuthData, (authData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            text: 'Главная',
            Icon: HomeIcon,
            path: getRouteMain(),
        },
        {
            text: 'О нас',
            Icon: AboutIcon,
            path: getRouteAbout(),
        },
    ];

    if (authData) {
        sidebarItemsList.push(
            {
                text: 'Профиль',
                Icon: ProfileIcon,
                path: getRouteProfile(authData.id),
                authOnly: true,
            },
            {
                text: 'Статьи',
                Icon: ArticlesIcon,
                path: getRouteArticles(),
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
