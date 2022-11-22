import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticleFieldSort,
    ArticleSortSelector,
    ArticleType,
    ArticleView,
    ArticleViewSelector,
    ArticleTypeTabs,
} from 'entities/Article';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    getArticlesPageListOrder,
    getArticlesPageListSearch,
    getArticlesPageListSort,
    getArticlesPageListType,
    getArticlesPageListView,
} from '../../model/selectors/getArticlesPageList';
import { articlesPageListActions } from '../../model/slices/articlesListSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlesPageFilters.module.scss';

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
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.header}>
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
            </div>
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
        </div>
    );
});

export { ArticlesPageFilters };
