import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';

interface ArticlesListProps {
    className?: string;
    articles: Article[];
    view: ArticleView;
    isLoading?: boolean;
}

const getSkeletons = (view: ArticleView) => (new Array(10).fill(0).map((_, index) => (
    <ArticlesListItemSkeleton
        key={index}
        view={view}
    />
)));

const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
                {getSkeletons(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            article={article}
            key={article.id}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : <Text title={t('Статей нет')} />}
        </div>
    );
});

export { ArticlesList };
