import { lazy } from 'react';

const ProfilePageAsync = lazy(async () => {
    return import('./ProfilePage')
        .then((component) => ({ default: component.ProfilePage }));
});

export { ProfilePageAsync };
