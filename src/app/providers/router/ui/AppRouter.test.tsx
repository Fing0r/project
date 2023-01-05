import { screen } from '@testing-library/react';

import { AppRouter } from './AppRouter';

import { UserRoles } from '@/entities/User';
import { getRouteAdmitPanel, getRouteMain, getRouteProfile } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/AppRouter', () => {
    test('Страница отрендерилась', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Отрендерилась "Cтраница не найденна"', async () => {
        componentRender(<AppRouter />, {
            route: '/asdasdas',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Перенаправит на главную страницу, если не авторизован', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Загрузит страницу, если авторизован', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _inited: true, authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ запрещен, нет прав', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmitPanel(),
            initialState: {
                user: {
                    _inited: true, authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен, права есть', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmitPanel(),
            initialState: {
                user: {
                    _inited: true,
                    authData: {
                        roles: [UserRoles.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
