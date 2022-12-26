import { MutableRefObject, useCallback, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPageList } from '../../model/services/initFetchArticlesList/initArticlesPageList';
import { articlesPageListReducer } from '../../model/slices/articlesListSlice';
import { ArticlesInfinityList } from '../ArticlesInfinityList/ArticlesInfinityList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

import cls from './ArticlesPage.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

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
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useDynamicModule(initialReducers, false);

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
                <ArticlesInfinityList />
            </div>
        </Page>
    );
};

export { ArticlesPage };
