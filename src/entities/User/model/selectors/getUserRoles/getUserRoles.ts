import { createSelector } from '@reduxjs/toolkit';

import { UserRoles } from '../../consts/userConsts';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) =>
    roles?.includes(UserRoles.ADMIN),
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
    roles?.includes(UserRoles.MANAGER),
);
