import { lazy } from 'react';

const ForbiddenPageAsync = lazy(async () => {
    return import('./ForbiddenPage').then((component) => ({ default: component.ForbiddenPage }));
});

export { ForbiddenPageAsync as ForbiddenPage };
