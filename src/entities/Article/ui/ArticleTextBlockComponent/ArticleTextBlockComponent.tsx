import { memo } from 'react';

import { ArticleTextBlock } from '../../model/types/article';

import cls from './ArticleTextBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block: { paragraphs, title } = {} } = props;

        return (
            <div
                className={classNames(cls.ArticleTextBlockComponent, {}, [
                    className,
                ])}
            >
                {title && <Text title={title} className={cls.title} />}
                {paragraphs?.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.text}
                    />
                ))}
            </div>
        );
    },
);

export { ArticleTextBlockComponent };
