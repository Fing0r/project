import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { MutableRefObject, useCallback, useRef } from 'react';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPageList } from '../../model/services/initFetchArticlesList/initArticlesPageList';
import { articlesPageListReducer, getArticlesPageList } from '../../model/slices/articlesListSlice';
import cls from './ArticlesPage.module.scss';
import { getArticlesPageListIsLoading, getArticlesPageListView } from '../../model/selectors/getArticlesPageList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

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
    const ref = useRef() as MutableRefObject<HTMLDivElement>;
    useDynamicModule(initialReducers, false);

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticlesPageList.selectAll);
    const isLoading = useSelector(getArticlesPageListIsLoading);
    const view = useSelector(getArticlesPageListView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPageList(searchParams));
    });

    const onLoadNextArticles = useCallback(() => {
        dispatch(fetchNextArticles());
    }, [dispatch]);

    return (
        <Page
            customWrapperRef={ref}
            onScrollEnd={onLoadNextArticles}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <ArticlesPageFilters />
                <ArticlesList
                    // wrapperRef={ref}
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </div>
        </Page>
    );
};

export { ArticlesPage };
