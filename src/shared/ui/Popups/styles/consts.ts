import cls from './Popups.module.scss';

import { DirectionOptions } from '@/shared/types/ui';

export const directionClasses: Record<DirectionOptions, string> = {
    'top-left': cls.directionTopLeft,
    'top-right': cls.directionTopRight,
    'bottom-left': cls.directionBottomLeft,
    'bottom-right': cls.directionBottomRight,
};
