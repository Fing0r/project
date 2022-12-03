import {
    memo,
    Suspense,
    useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, RoutePropsWithAuth } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { RequireRoles } from 'app/providers/router/ui/RequireRoles';

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
