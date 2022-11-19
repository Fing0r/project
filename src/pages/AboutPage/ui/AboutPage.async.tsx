import { lazy } from 'react';

const AboutPageAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./AboutPage')
        .then((component) => ({ default: component.AboutPage }));
});

export { AboutPageAsync };
