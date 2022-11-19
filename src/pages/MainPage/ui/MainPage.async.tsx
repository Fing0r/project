import { lazy } from 'react';

const MainPageAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./MainPage')
        .then((component) => ({ default: component.MainPage }));
});

export { MainPageAsync };
