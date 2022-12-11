import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailPageHeader/ArticleDetailsPageHeader';
import { articleDetailsPageReducer } from '../../model/slice';
import cls from './ArticleDetailsPage.module.scss';

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
            <div className={cls.articleWrapper}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} className={cls.articleDetail} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </div>
        </Page>
    );
};

export { ArticleDetailsPage };
