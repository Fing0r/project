import { useCallback, useRef } from 'react';

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    return useCallback(
        (...args: any[]) => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};

export { useDebounce };
