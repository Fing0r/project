const usePxToRem = (px: number | string) => {
    // const oneRem = parseInt(getComputedStyle(document.documentElement).fontSize, 10);
    const transformPx = typeof px === 'string' ? parseInt(String(px), 10) : px;

    return transformPx / 16;
};

export { usePxToRem };
