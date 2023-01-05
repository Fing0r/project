import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserRoles, UserRolesType } from '@/entities/User';
import { getRouteForbidden } from '@/shared/const/router';

interface RequireRoleProps {
    children: JSX.Element;
    roles?: UserRolesType[];
}

const RequireRoles = ({ roles, children }: RequireRoleProps) => {
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const hasRequireRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles?.some((requireRole) => userRoles?.includes(requireRole));
    }, [roles, userRoles]);

    if (!hasRequireRoles) {
        return (
            <Navigate
                to={getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
};

export { RequireRoles };
