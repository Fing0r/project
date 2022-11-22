import { lazy } from 'react';

const ArticleEditPageAsync = lazy(async () => {
    return import('./ArticleEditPage')
        .then((component) => ({ default: component.ArticleEditPage }));
});

export { ArticleEditPageAsync };
