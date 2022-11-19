import { usePxToRem } from 'shared/lib/hooks/usePxToRem';

const useGuardPercentCSSProperty = (property?: string | number) => {
    const pxToRem = usePxToRem;

    if (!property) {
        return property;
    }

    if (String(property).includes('%')) {
        return property;
    }

    return `${pxToRem(property)}rem`;
};

export { useGuardPercentCSSProperty };
