import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleCanEdit } from '../../model/selectors/articles';

import cls from './ArticleDetailPageHeader.module.scss';

import { getArticleDetailData } from '@/entities/Article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface ArticleDetailPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
    const { className } = props;

    const navigate = useNavigate();
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailData);

    const canEdit = useSelector(getArticleCanEdit);
    const onBackArticles = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    return (
        <div
            className={classNames(cls.ArticleDetailPageHeader, {}, [className])}
        >
            <Button className={cls.comeBack} onClick={onBackArticles}>
                {t('Вернуться назад')}
            </Button>
            {canEdit && (
                <Button onClick={onEditArticle}>{t('Редактировать')}</Button>
            )}
        </div>
    );
});

export { ArticleDetailsPageHeader };
