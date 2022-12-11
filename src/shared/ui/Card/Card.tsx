import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export const enum CardTheme {
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?:CardTheme;
    isBorder?: boolean;
}

const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.BACKGROUND,
        isBorder = true,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls[theme]]: theme,
        [cls.border]: isBorder,
    };

    return (
        <div
            {...otherProps}
            className={classNames(cls.Card, mods, [className])}
        >
            {children}
        </div>
    );
});

export { Card };
