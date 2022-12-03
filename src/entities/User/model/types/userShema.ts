export type UserRoles = ValueOf<typeof UserRoles>;
export const UserRoles = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    USER: 'USER',
} as const;

export interface User {
    username: string;
    id: string;
    avatar?: string;
    roles?: UserRoles[];
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
