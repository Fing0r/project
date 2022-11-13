import { useCallback, useMemo, useState } from 'react';

interface HoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverType = {
    isHover: boolean,
    hoverBind: HoverBind
}

const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(() => [
        isHover,
        { onMouseEnter, onMouseLeave },
    ], [isHover, onMouseEnter, onMouseLeave]);
};

export { useHover };
