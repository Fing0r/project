import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { ArticleFieldSort } from 'entities/Article/model/types/article';

export const getArticlesPageListIsLoading = (state: StateSchema) => state.articlesPageList?.isLoading || false;
export const getArticlesPageListView = (state: StateSchema) => state.articlesPageList?.view || ArticleView.GRID;
export const getArticlesPageListError = (state: StateSchema) => state.articlesPageList?.error;
export const getArticlesPageListLimit = (state: StateSchema) => state.articlesPageList?.limit || 8;
export const getArticlesPageListHasMore = (state: StateSchema) => state.articlesPageList?.hasMore || false;
export const getArticlesPageListNumPage = (state: StateSchema) => state.articlesPageList?.page || 1;
export const getArticlesPageListInited = (state: StateSchema) => state.articlesPageList?._inited || false;
export const getArticlesPageListSort = (state: StateSchema) => state.articlesPageList?.sort ?? ArticleFieldSort.CREATED;
export const getArticlesPageListOrder = (state: StateSchema) => state.articlesPageList?.order ?? 'asc';
export const getArticlesPageListSearch = (state: StateSchema) => state.articlesPageList?.search ?? '';
export const getArticlesPageListType = (state: StateSchema) => state.articlesPageList?.type ?? ArticleType.ALL;
