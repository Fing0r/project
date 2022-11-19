import { lazy } from 'react';

const ArticleDetailsPageAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./ArticleDetailsPage')
        .then((component) => ({ default: component.ArticleDetailsPage }));
});

export { ArticleDetailsPageAsync };
