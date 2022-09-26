import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

function AppRouter() {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className="container">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
}

export { AppRouter };
