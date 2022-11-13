import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsListIsLoading = (state: StateSchema) => state.articleCommentList?.isLoading || false;
export const getArticleCommentsListError = (state: StateSchema) => state.articleCommentList?.error;
