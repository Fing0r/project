import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailPageHeader/ArticleDetailsPageHeader';

import cls from './ArticleDetailsPage.module.scss';

import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

interface ArticleDetailPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('article-details');
    const { id = __PROJECT__ === 'storybook' ? '1' : '' } = useParams<{id: string}>();

    useDynamicModule(initialReducers, true);

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                <Text text={t('Статьи не найдено')} />
            </Page>
        );
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="24" className={cls.articleWrapper}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export { ArticleDetailsPage };
