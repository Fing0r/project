import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useGetProfileRating, useSetProfileRating } from '../../api/profileRatingApi';

import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

export const ProfileRating = memo((props: ProfileRatingProps) => {
    const { className, profileId } = props;
    const { t } = useTranslation();
    const { id: userId } = useSelector(getAuthData) ?? {};

    const [rateArticle] = useSetProfileRating();

    const { data, isLoading } = useGetProfileRating({
        profileId,
        userId: userId ?? '',
    });

    const handleRateArticle = useCallback((selectedRating: number, feedback?: string) => {
        try {
            rateArticle({
                rating: selectedRating,
                feedback,
                userId: userId ?? '',
                profileId,
            });
        } catch (e) {
            console.log(e);
        }
    }, [profileId, rateArticle, userId]);

    const onAccept = useCallback((selectedRating: number, feedback?: string) => {
        handleRateArticle(selectedRating, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((selectedRating: number) => {
        handleRateArticle(selectedRating);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={114} borderRadius={16} />;
    }

    const rating = data?.[0]?.rating;

    return (
        <RatingCard
            className={className}
            onAccept={onAccept}
            onCancel={onCancel}
            rating={rating}
            hasFeedback
            title={t('Как вам профиль пользователя?')}
            feedbackTitle={t('Оставьте отзыв')}
            feedbackPlaceholder={t('Введите отзыв...')}
        />
    );
});
