import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticlesPageListOrder,
    getArticlesPageListSearch,
    getArticlesPageListSort,
    getArticlesPageListType,
    getArticlesPageListView,
} from '../../model/selectors/getArticlesPageList';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageListActions } from '../../model/slices/articlesListSlice';

import cls from './ArticlesPageFilters.module.scss';

import {
    ArticleFieldSort,
    ArticleSortSelector,
    ArticleType,
    ArticleView,
    ArticleViewSelector,
    ArticleTypeTabs,
} from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types';
import { Input, InputTheme } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';

interface ArticlesPageFiltersProps {
    className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageListView);
    const order = useSelector(getArticlesPageListOrder);
    const sort = useSelector(getArticlesPageListSort);
    const search = useSelector(getArticlesPageListSearch);
    const type = useSelector(getArticlesPageListType);

    const { t } = useTranslation();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleFieldSort) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setSort(sort));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setOrder(order));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeType = useCallback((tab: ArticleType) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setType(tab));
        fetchData();
    }, [dispatch, fetchData]);

    const debounceFetchData = useDebounce(fetchData, 300);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setSearch(value));
        debounceFetchData();
    }, [debounceFetchData, dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageListActions.setView(view));
    }, [dispatch]);

    return (
        <VStack gap="16" className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <HStack
                gap="16"
                justify="between"
                className={cls.header}
            >
                <ArticleSortSelector
                    className={cls.sorted}
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector
                    onViewClick={onChangeView}
                    currentView={view}
                />
            </HStack>
            <Input
                theme={InputTheme.OUTLINE}
                value={search}
                className={cls.search}
                onChange={onChangeSearch}
                label={t('Поиск')}
            />
            <ArticleTypeTabs
                value={type}
                onChange={onChangeType}
            />
        </VStack>
    );
});

export { ArticlesPageFilters };
