import { lazy } from 'react';

const ArticlesPageAsync = lazy(async () => {
    return import('./ArticlesPage')
        .then((component) => ({ default: component.ArticlesPage }));
});

export { ArticlesPageAsync };
