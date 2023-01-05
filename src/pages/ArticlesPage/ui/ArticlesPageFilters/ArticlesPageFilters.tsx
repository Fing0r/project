import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import {
    useArticlesPageListOrder,
    useArticlesPageListType,
    useArticlesPageListView,
    useArticlesPageListSort,
    useArticlesPageListSearch,
} from '../../model/selectors/getArticlesPageList';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useArticlesPageListActions } from '../../model/slices/articlesListSlice';

import cls from './ArticlesPageFilters.module.scss';

import {
    ArticleFieldSort,
    ArticleType,
    ArticleView,
} from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';
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

    const view = useArticlesPageListView();
    const order = useArticlesPageListOrder();
    const sort = useArticlesPageListSort();
    const search = useArticlesPageListSearch();
    const type = useArticlesPageListType();
    const {
        setPage,
        setSort,
        setOrder,
        setType,
        setSearch,
        setView,
    } = useArticlesPageListActions();

    const { t } = useTranslation();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleFieldSort) => {
        setPage(1);
        setSort(sort);
        fetchData();
    }, [fetchData, setPage, setSort]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        setPage(1);
        setOrder(order);
        fetchData();
    }, [fetchData, setOrder, setPage]);

    const onChangeType = useCallback((tab: ArticleType) => {
        setPage(1);
        setType(tab);
        fetchData();
    }, [fetchData, setPage, setType]);

    const debounceFetchData = useDebounce(fetchData, 300);

    const onChangeSearch = useCallback((value: string) => {
        setPage(1);
        setSearch(value);
        debounceFetchData();
    }, [debounceFetchData, setPage, setSearch]);

    const onChangeView = useCallback((view: ArticleView) => {
        setView(view);
    }, [setView]);

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
