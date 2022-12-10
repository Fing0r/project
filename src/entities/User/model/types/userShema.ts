import { UserRoles } from '../consts/userConsts';

export type UserRolesType = ValueOf<typeof UserRoles>;

export interface User {
    username: string;
    id: string;
    avatar?: string;
    roles?: UserRolesType[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
