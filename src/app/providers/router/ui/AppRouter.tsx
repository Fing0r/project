import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';

const AppRouter = memo(() => {
    const isAuth = useSelector(getAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter(({ authOnly }) => {
        if (authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <div className="container">
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                { element }
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </div>
    );
});

export { AppRouter };
