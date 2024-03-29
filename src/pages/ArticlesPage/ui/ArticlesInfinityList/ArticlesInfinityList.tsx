import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageListError,
    useArticlesPageListIsLoading,
    useArticlesPageListView,
} from '../../model/selectors/getArticlesPageList';
import { getArticlesPageList } from '../../model/slices/articlesListSlice';

import { ArticlesList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';

interface ArticlesInfinityListProps {
    className?: string;
}

const ArticlesInfinityList = memo((props: ArticlesInfinityListProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');

    const articles = useSelector(getArticlesPageList.selectAll);
    const isLoading = useArticlesPageListIsLoading();
    const error = useSelector(getArticlesPageListError);
    const view = useArticlesPageListView();

    if (error) {
        return <Text titleVariant="h3" title={t(error)} />;
    }

    return (
        <ArticlesList
            articles={articles}
            className={className}
            view={view}
            isLoading={isLoading}
            isVirtualize={false}
        />
    );
});

export { ArticlesInfinityList };
