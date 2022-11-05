import React from 'react';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    text: string;
    path: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const sidebarItemList: SidebarItemType[] = [
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
    {
        text: 'Профиль',
        Icon: ProfileIcon,
        path: RoutePath.profile,
        authOnly: true,
    },
];
