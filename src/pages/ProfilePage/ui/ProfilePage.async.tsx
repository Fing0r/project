import { lazy } from 'react';

const ProfilePageAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return import('./ProfilePage')
        .then((component) => ({ default: component.ProfilePage }));
});

export { ProfilePageAsync };
