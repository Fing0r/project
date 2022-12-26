import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import type { UserRolesType } from '@/entities/User';

export type RoutePropsWithAuth = RouteProps & {
    authOnly?: boolean;
    roles?: UserRolesType[];
}
