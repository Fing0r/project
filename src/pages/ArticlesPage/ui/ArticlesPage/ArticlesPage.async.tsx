import { lazy } from 'react';

const ArticlesPageAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return import('./ArticlesPage')
        .then((component) => ({ default: component.ArticlesPage }));
});

export { ArticlesPageAsync };
