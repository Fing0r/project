import { lazy, memo, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ProfileRatingProps } from './ProfileRating';

const ProfileRatingLazy = lazy(async () => {
    return import('./ProfileRating')
        .then((component) => ({ default: component.ProfileRating }));
});

const ProfileRatingAsync = memo<ProfileRatingProps>((props) => (
    <Suspense fallback={<Skeleton width="100%" height={140} />}>
        <ProfileRatingLazy {...props} />
    </Suspense>
));

export { ProfileRatingAsync };
