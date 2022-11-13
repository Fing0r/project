import { usePxToRem } from 'shared/lib/hooks/usePxToRem';

const useGuardPercentCSSProperty = (property?: string | number) => {
    if (!property) {
        return property;
    }

    if (String(property).includes('%')) {
        return property;
    }
    const pxToRem = usePxToRem;

    return `${pxToRem(property)}rem`;
};

export { useGuardPercentCSSProperty };
