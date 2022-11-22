import { lazy } from 'react';

const AboutPageAsync = lazy(async () => {
    return import('./AboutPage')
        .then((component) => ({ default: component.AboutPage }));
});

export { AboutPageAsync };
