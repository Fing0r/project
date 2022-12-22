import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import { useGetArticleRating, useSetArticleRating } from '../../api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const { id: userId } = useSelector(getAuthData) ?? {};

    const [rateArticle] = useSetArticleRating();

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: userId ?? '',
    });

    const handleRateArticle = useCallback((selectedRating: number, feedback?: string) => {
        try {
            rateArticle({
                rating: selectedRating,
                feedback,
                userId: userId ?? '',
                articleId,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticle, userId]);

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
            title={t('Как вам статья?')}
            feedbackTitle={t('Оставьте отзыв')}
            feedbackPlaceholder={t('Введите отзыв...')}
        />
    );
});
