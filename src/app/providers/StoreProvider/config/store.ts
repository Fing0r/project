import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { pageReducer } from 'widgets/Page';
import { $api } from 'shared/api/api';
import { CombinedState } from 'redux';
import { createReducerManager } from './reducerManager';
import { StateSchema, StoreWithManager, ThunkExtraArg } from './StateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        user: userReducer,
        page: pageReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
