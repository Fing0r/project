import { Additional, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export const enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export const enum TextAlign {
    CENTER = 'center',
    LEFT = 'left',
    RIGHT = 'right',
}

type TitleVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    wrapper?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    titleVariant?: TitleVariants;
    'data-testid'?: string;
}

const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        wrapper,
        className,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        titleVariant,
        'data-testid': dataTestId = '',
    } = props;

    const additional: Additional = [
        cls[theme],
        cls[align],
        cls[size],
        className,
    ];

    const TitleTag = titleVariant || 'h2';

    return (
        <div
            data-testid={dataTestId}
            className={classNames('', {}, additional)}
        >
            {title && (
                <TitleTag
                    className={classNames(cls.Title, {}, [])}
                    data-testid={`${dataTestId}.header`}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <p
                    className={classNames(cls.Text, {}, [])}
                    data-testid={`${dataTestId}.paragraph`}
                >
                    {text}
                </p>
            )}
            {wrapper && (
                <span
                    className={classNames(cls.Wrapper, {}, [])}
                    data-testid={`${dataTestId}.wrapper`}
                >
                    {wrapper}
                </span>
            )}
        </div>
    );
});

export { Text };
