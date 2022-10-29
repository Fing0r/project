import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { StateSchema, StoreWithManager } from './StateSchema';

export const createReduxStore = (
    initialState?: StateSchema,
    asyncReducer?: ReducersMapObject<StateSchema>,
): StoreWithManager => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store: StoreWithManager = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    store.reducerManager = reducerManager;

    return store;
};
