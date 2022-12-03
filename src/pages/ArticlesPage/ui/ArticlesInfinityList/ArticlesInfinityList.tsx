import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { getArticlesPageList } from '../../model/slices/articlesListSlice';
import {
    getArticlesPageListError,
    getArticlesPageListIsLoading,
    getArticlesPageListView,
} from '../../model/selectors/getArticlesPageList';

interface ArticlesInfinityListProps {
    className?: string;
}

const ArticlesInfinityList = memo((props: ArticlesInfinityListProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articles');

    const articles = useSelector(getArticlesPageList.selectAll);
    const isLoading = useSelector(getArticlesPageListIsLoading);
    const error = useSelector(getArticlesPageListError);
    const view = useSelector(getArticlesPageListView);

    if (error) {
        return <Text titleVariant="h3" title={t(error)} />;
    }

    return (
        <ArticlesList
            articles={articles}
            className={className}
            view={view}
            isLoading={isLoading}
            isVirtualize
        />
    );
});

export { ArticlesInfinityList };
