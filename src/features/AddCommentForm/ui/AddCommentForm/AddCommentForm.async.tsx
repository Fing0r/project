import { lazy } from 'react';

const AddCommentFormAsync = lazy(async () => {
    return import('./AddCommentForm').then((component) => ({
        default: component.AddCommentForm,
    }));
});

export { AddCommentFormAsync };
