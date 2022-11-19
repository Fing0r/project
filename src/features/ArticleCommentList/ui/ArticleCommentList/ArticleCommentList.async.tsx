import { lazy } from 'react';

const ArticleCommentListAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./ArticleCommentList')
        .then((component) => ({ default: component.ArticleCommentList }));
});

export { ArticleCommentListAsync };
