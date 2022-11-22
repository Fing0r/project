import { lazy } from 'react';

const MainPageAsync = lazy(async () => {
    return import('./MainPage')
        .then((component) => ({ default: component.MainPage }));
});

export { MainPageAsync };
