import { lazy } from 'react';

const ArticleDetailsPageAsync = lazy(async () => {
    return import('./ArticleDetailsPage').then((component) => ({
        default: component.ArticleDetailsPage,
    }));
});

export { ArticleDetailsPageAsync };
