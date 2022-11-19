import { lazy } from 'react';

const AddCommentFormAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./AddCommentForm')
        .then((component) => ({ default: component.AddCommentForm }));
});

export { AddCommentFormAsync };
