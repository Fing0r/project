import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDetailData = (state: StateSchema) => state.articleDetails?.data;
