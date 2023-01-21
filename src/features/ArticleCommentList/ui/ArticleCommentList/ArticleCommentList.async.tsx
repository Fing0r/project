import { lazy } from 'react';

const ArticleCommentListAsync = lazy(async () => {
    return import('./ArticleCommentList').then((component) => ({
        default: component.ArticleCommentList,
    }));
});

export { ArticleCommentListAsync };
