import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { addCommentForArticle, ArticleCommentList } from 'features/ArticleCommentList';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch();
    const { id = __PROJECT__ === 'storybook' ? '1' : '' } = useParams<{id: string}>();

    const { t } = useTranslation('article-details');

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <Text text={t('Статьи не найдено')} />
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <div className={cls.articleWrapper}>
                <ArticleDetails id={id} className={cls.articleDetail} />
                <Text title={t('Комментарии')} className={cls.titleComments} />
                <AddCommentForm onSendComment={onSendComment} />
                <ArticleCommentList id={id} />
            </div>
        </Page>
    );
};

export { ArticleDetailsPage };
