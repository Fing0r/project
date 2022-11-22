import { HTMLAttributeAnchorTarget, memo } from 'react';
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
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticlesListItemSkeleton
            key={index}
            view={view}
        />
    ));

const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
        target,
    } = props;

    const { t } = useTranslation('articles');

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            target={target}
            article={article}
            key={article.id}
            view={view}
        />
    );

    return (
        <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
            {!isLoading && !articles.length && <Text title={t('Статей нет')} />}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export { ArticlesList };
