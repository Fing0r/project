import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useParams } from 'react-router-dom';
import { addCommentForArticle, ArticleCommentList } from 'features/ArticleCommentList';
import { AddCommentForm } from 'features/AddCommentForm/ui/AddCommentForm/AddCommentForm';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
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
            <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
                <Text text={t('Статьи не найдено')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
            <ArticleDetails id={id} className={cls.articleDetail} />
            <Text title={t('Комментарии')} className={cls.titleComments} />
            <AddCommentForm onSendComment={onSendComment} />
            <ArticleCommentList id={id} />
        </div>
    );
};

export { ArticleDetailsPage };
