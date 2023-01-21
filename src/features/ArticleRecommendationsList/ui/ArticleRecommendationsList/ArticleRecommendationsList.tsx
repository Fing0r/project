import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useGetArticleRecommendationsListQuery } from '../../api/recommendationsApi';

import cls from './ArticleRecommendationsList.module.scss';

import {
    ArticlesList,
    ArticlesListItemSkeleton,
    ArticleView,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

const getSkeletons = () =>
    new Array(4)
        .fill(0)
        .map((_, index) => (
            <ArticlesListItemSkeleton key={index} view={ArticleView.GRID} />
        ));

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');
        const {
            data: articles,
            isLoading,
            error,
        } = useGetArticleRecommendationsListQuery(4);

        if (error) {
            return (
                <Text
                    titleVariant="h3"
                    title={t('Не удалось загрузить рекомедованные статьи')}
                />
            );
        }

        if (isLoading) {
            return (
                <VStack gap="32">
                    <Skeleton width={400} height={32} />
                    <HStack gap="16" className={cls.recommendations}>
                        {getSkeletons()}
                    </HStack>
                </VStack>
            );
        }

        return (
            <div
                data-testid="ArticleRecommendationsList"
                className={classNames('', {}, [className])}
            >
                <Text
                    className={cls.titleComments}
                    title={t('Рекомендованные статьи')}
                />
                <ArticlesList
                    articles={articles}
                    isLoading={isLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
            </div>
        );
    },
);
