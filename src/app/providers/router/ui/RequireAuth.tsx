import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const isAuth = useSelector(getAuthData);
    const location = useLocation();

    if (!isAuth) {
        return (
            <Navigate
                to={RoutePath.main}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export { RequireAuth };
