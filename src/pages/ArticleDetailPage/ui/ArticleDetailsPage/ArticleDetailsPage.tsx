import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails, ArticlesList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
// import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
// import {
//     fetchArticleRecommendations,
// } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
// import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

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
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    // const recommendationsArticles = useSelector(getArticleRecommendations.selectAll);
    const isLoadingComments = useSelector(getArticleCommentsIsLoading);
    // const isLoadingRecommendations = useSelector(getArticleRecommendationsIsLoading);
    const { id = __PROJECT__ === 'storybook' ? '1' : '' } = useParams<{id: string}>();
    useDynamicModule(initialReducers, true);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        // dispatch(fetchArticleRecommendations());
    });

    const { t } = useTranslation('article-details');

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

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
                <ArticleDetailPageHeader />
                <ArticleDetails id={id} className={cls.articleDetail} />

                <ArticleRecommendationsList />

                {/* <Text className={cls.titleComments} title={t('Рекомендованные статьи')} /> */}
                {/* <ArticlesList */}
                {/*    articles={recommendationsArticles} */}
                {/*    isLoading={isLoadingRecommendations} */}
                {/*    className={cls.recommendations} */}
                {/*    target="_blank" */}
                {/* /> */}

                <Text title={t('Комментарии')} className={cls.titleComments} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={isLoadingComments}
                />
            </div>
        </Page>
    );
};

export { ArticleDetailsPage };
