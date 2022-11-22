import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsListIsLoading = (state: StateSchema) => state.articleDetailComments?.isLoading || false;
export const getArticleCommentsListError = (state: StateSchema) => state.articleDetailComments?.error;
