import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageListSchema } from 'pages/ArticlesPage';
import { PageSchema } from 'widgets/Page';
import { ArticleDetailPageSchema } from 'pages/ArticleDetailPage';
import { ArticleCommentListSchema } from 'features/ArticleCommentList';
import { rtkApi } from 'shared/api/rtkApi';
import { EditableProfileCardSchema } from 'features/EditableProfileCard';

export interface StateSchema {
    user: UserSchema;
    page: PageSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
    // async
    profile?: EditableProfileCardSchema;
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPageList?: ArticlesPageListSchema;
    articleDetailsPage?: ArticleDetailPageSchema;
    articleDetailComments?: ArticleCommentListSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
