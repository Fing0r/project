import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleFieldSort, ArticleType, ArticleView } from '@/entities/Article';
import { buildSelector } from '@/shared/lib/store';

export const [
    useArticlesPageListIsLoading,
    getArticlesPageListIsLoading,
] = buildSelector((state) => state.articlesPageList?.isLoading || false);
export const [
    useArticlesPageListView,
    getArticlesPageListView,
] = buildSelector((state: StateSchema) => state.articlesPageList?.view || ArticleView.GRID);
export const getArticlesPageListError = (state: StateSchema) => state.articlesPageList?.error;
export const getArticlesPageListLimit = (state: StateSchema) => state.articlesPageList?.limit || 8;
export const getArticlesPageListHasMore = (state: StateSchema) => state.articlesPageList?.hasMore || false;
export const getArticlesPageListNumPage = (state: StateSchema) => state.articlesPageList?.page || 1;
export const getArticlesPageListInited = (state: StateSchema) => state.articlesPageList?._inited || false;
// export const getArticlesPageListSort = (state: StateSchema) => state.articlesPageList?.sort ?? ArticleFieldSort.CREATED;
export const [
    useArticlesPageListSort,
    getArticlesPageListSort,
] = buildSelector((state: StateSchema) => state.articlesPageList?.sort ?? ArticleFieldSort.CREATED);
export const [
    useArticlesPageListOrder,
    getArticlesPageListOrder,
] = buildSelector((state: StateSchema) => state.articlesPageList?.order ?? 'asc');
export const [
    useArticlesPageListSearch,
    getArticlesPageListSearch,
] = buildSelector((state: StateSchema) => state.articlesPageList?.search ?? '');
export const [
    useArticlesPageListType,
    getArticlesPageListType,
] = buildSelector((state: StateSchema) => state.articlesPageList?.type ?? ArticleType.ALL);
