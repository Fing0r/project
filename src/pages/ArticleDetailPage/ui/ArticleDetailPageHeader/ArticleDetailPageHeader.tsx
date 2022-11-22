import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticleCanEdit } from 'pages/ArticleDetailPage/model/selectors/articles';
import { getArticleDetailData } from 'entities/Article';
import cls from './ArticleDetailPageHeader.module.scss';

interface ArticleDetailPageHeaderProps {
    className?: string;
}

const ArticleDetailPageHeader = memo((props: ArticleDetailPageHeaderProps) => {
    const {
        className,
    } = props;

    const navigate = useNavigate();
    const { t } = useTranslation();
    const article = useSelector(getArticleDetailData);

    const canEdit = useSelector(getArticleCanEdit);
    const onBackArticles = useCallback(() => {
        navigate(`${RoutePath.articles}`);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailPageHeader, {}, [className])}>
            <Button
                className={cls.comeBack}
                onClick={onBackArticles}
            >
                {t('Вернуться назад')}
            </Button>
            {canEdit && (
                <Button
                    onClick={onEditArticle}
                >
                    {t('Редактировать')}
                </Button>
            )}
        </div>
    );
});

export { ArticleDetailPageHeader };
