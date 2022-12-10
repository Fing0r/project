import { useCallback, useRef } from 'react';

const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const throttleREf = useRef(true);

    return useCallback((...args: any[]) => {
        if (throttleREf.current) {
            callback(...args);
            throttleREf.current = false;

            setTimeout(() => {
                throttleREf.current = true;
            }, delay);
        }
    }, [callback, delay]);
};

export { useThrottle };
