import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    useGetArticleRecommendationsListQuery,
} from '../../api/recommendationsApi';

import cls from './ArticleRecommendationsList.module.scss';

import { ArticlesList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const {
        data: articles,
        isLoading,
        error,
    } = useGetArticleRecommendationsListQuery(4);

    if (error || !articles) {
        return (
            <Text
                titleVariant="h3"
                title={t('Не удалось загрузить рекомедованные статьи')}
            />
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            {!isLoading && (
                <Text
                    className={cls.titleComments}
                    title={t('Рекомендованные статьи')}
                />
            )}
            <ArticlesList
                articles={articles}
                isLoading={isLoading}
                className={cls.recommendations}
                target="_blank"
            />
        </div>
    );
});
