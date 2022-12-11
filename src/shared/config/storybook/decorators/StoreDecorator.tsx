import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/hooks/useDynamicModule';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailPage/model/slice';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/profileSlice';
import { articlesPageListReducer } from '@/pages/ArticlesPage/model/slices/articlesListSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPageList: articlesPageListReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);

export { StoreDecorator };
