import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
    align?: 'center' | 'left' | 'right'
}

const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        className,
        theme = TextTheme.PRIMARY,
        align = 'left',
    } = props;

    return (
        <div
            className={classNames('', {}, [cls[theme], cls[align]])}
        >
            {title && (
                <h2
                    className={classNames(cls.Title, {}, [cls[theme], className])}
                >
                    {title}
                </h2>
            )}
            {text && (
                <p
                    className={classNames(cls.Text, {}, [className])}
                >
                    {text}
                </p>
            )}
        </div>
    );
});

export { Text };