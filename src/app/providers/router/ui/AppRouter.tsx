import {
    memo,
    Suspense,
    useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutePropsWithAuth } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { RequireRoles } from './RequireRoles';
import { routeConfig } from '../config/routeConfig';

const AppRouter = memo(() => {
    const renderRouteWithWrapper = useCallback(({
        path, element, authOnly, roles,
    }: RoutePropsWithAuth) => {
        const elementItem = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? (
                    <RequireAuth>
                        <RequireRoles roles={roles}>
                            {elementItem}
                        </RequireRoles>
                    </RequireAuth>
                ) : elementItem}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderRouteWithWrapper)}
        </Routes>
    );
});

export { AppRouter };
