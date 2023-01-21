import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData } from '@/entities/User';
import { getRouteMain } from '@/shared/const/router';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isAuth = useSelector(getAuthData);
    const location = useLocation();

    if (!isAuth) {
        return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
        );
    }

    return children;
};

export { RequireAuth };
