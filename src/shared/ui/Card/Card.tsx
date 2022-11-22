import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export const enum CardTheme {
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?:CardTheme
}

const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.BACKGROUND,
        ...otherProps
    } = props;

    return (
        <div
            {...otherProps}
            className={classNames(cls.Card, { [cls[theme]]: theme }, [className])}
        >
            {children}
        </div>
    );
});

export { Card };
