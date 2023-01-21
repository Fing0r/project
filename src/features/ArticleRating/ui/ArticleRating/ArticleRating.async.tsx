import { lazy, memo, Suspense } from 'react';

import { ArticleRatingProps } from './ArticleRating';

import { Skeleton } from '@/shared/ui/Skeleton';

const ArticleRatingLazy = lazy(async () => {
    return import('./ArticleRating').then((component) => ({
        default: component.ArticleRating,
    }));
});

const ArticleRatingAsync = memo<ArticleRatingProps>((props) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ArticleRatingLazy {...props} />
    </Suspense>
));

export { ArticleRatingAsync };
