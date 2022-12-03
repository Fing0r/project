import { useEffect } from 'react';

const useInitialEffect = (callback: () => void, dependency?: unknown) => {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
            callback();
        }
        // eslint-disable-next-line
    }, [dependency]);
};

export { useInitialEffect };
