import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Article, ArticlesList } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetArticleRecommendationsListQuery } = recommendationsApi;

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
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
