import { memo } from 'react';

import { ArticleCodeBlock } from '../../model/types/article';

import cls from './ArticleCodeBlockComponent.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const {
            className,
            block: { code },
        } = props;

        return (
            <Code
                className={classNames(cls.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
                code={code}
            />
        );
    },
);

export { ArticleCodeBlockComponent };
