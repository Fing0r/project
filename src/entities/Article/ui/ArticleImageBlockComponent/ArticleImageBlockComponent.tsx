import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block: {
            title,
            src,
        },
    } = props;

    return (
        <figure className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            {src && (
                <img
                    className={cls.img}
                    src={src}
                    alt={title ?? ''}
                />
            )}
            {title && (
                <figcaption className={cls.figcaption}>
                    <Text wrapper={title} align={TextAlign.CENTER} />
                </figcaption>
            )}
        </figure>
    );
});

export { ArticleImageBlockComponent };
