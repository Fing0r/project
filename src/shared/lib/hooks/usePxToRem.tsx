import { useMemo } from 'react';

const usePxToRem = (px: number | string) => useMemo(() => {
    const oneRem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);
    const transformPx = typeof px === 'string' ? parseInt(String(px), 10) : px;

    return transformPx / oneRem;
}, [px]);

export { usePxToRem };
