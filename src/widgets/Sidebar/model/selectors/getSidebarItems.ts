import { createSelector } from '@reduxjs/toolkit';

import { SidebarItemType } from '../types/SidebarItem';

import { getAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { RoutePath } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getAuthData,
    (authData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                text: 'Главная',
                Icon: HomeIcon,
                path: RoutePath.main,
            },
            {
                text: 'О нас',
                Icon: AboutIcon,
                path: RoutePath.about,
            },
        ];

        if (authData) {
            sidebarItemsList.push(
                {
                    text: 'Профиль',
                    Icon: ProfileIcon,
                    path: `${RoutePath.profile}${authData.id}`,
                    authOnly: true,
                },
                {
                    text: 'Статьи',
                    Icon: ArticlesIcon,
                    path: RoutePath.articles,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
