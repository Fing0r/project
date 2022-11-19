import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    ArticlesList, ArticleView, ArticleViewSelector, ArticleSortSelector,
} from 'entities/Article';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';
import { Page } from 'widgets/Page';
import { ArticleFieldSort } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useSearchParams } from 'react-router-dom';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPageList } from '../../model/services/initFetchArticlesList/initArticlesPageList';
import {
    articlesPageListActions,
    articlesPageListReducer,
    getArticlesPageList,
} from '../../model/slices/articlesListSlice';
import cls from './ArticlesPage.module.scss';
import {
    getArticlesPageListIsLoading, getArticlesPageListOrder,
    getArticlesPageListSort,
    getArticlesPageListView,
} from '../../model/selectors/getArticlesPageList';

interface ArticlesPageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    articlesPageList: articlesPageListReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;

    useDynamicModule(initialReducers, false);

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPageList.selectAll);
    const isLoading = useSelector(getArticlesPageListIsLoading);
    const view = useSelector(getArticlesPageListView);
    const order = useSelector(getArticlesPageListOrder);
    const sort = useSelector(getArticlesPageListSort);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPageList(searchParams));
    });

    const onLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageListActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleFieldSort) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setSort(sort));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageListActions.setPage(1));
        dispatch(articlesPageListActions.setOrder(order));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadNextArticles} className={classNames(cls.ArticlesPage, {}, [className])}>
            <div className={cls.wrapper}>
                <ArticleViewSelector
                    className={cls.header}
                    onViewClick={onChangeView}
                    currentView={view}
                />
                <ArticleSortSelector
                    valueField={sort}
                    valueOrder={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticlesList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </Page>
    );
};

export { ArticlesPage };
