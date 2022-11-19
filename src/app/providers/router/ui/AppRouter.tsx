import {
    memo,
    Suspense,
    useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig, RoutePropsWithAuth } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = memo(() => {
    const renderRouteWithWrapper = useCallback(({ path, element, authOnly }: RoutePropsWithAuth) => {
        const elementItem = (
            <Suspense fallback={<PageLoader />}>
                { element }
            </Suspense>
        );

        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{elementItem}</RequireAuth> : elementItem}
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
