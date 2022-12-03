import { lazy } from 'react';

const AdminPanelPageAsync = lazy(async () => {
    return import('./AdminPanelPage').then((component) => ({ default: component.AdminPanelPage }));
});

export { AdminPanelPageAsync as AdminPanelPage };
