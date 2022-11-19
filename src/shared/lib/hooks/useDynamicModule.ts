import { useDispatch, useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer
}

const useDynamicModule = (reducers: ReducersList, removeAfterUnmount: boolean = true) => {
    const dispatch = useDispatch();

    const store = useStore() as StoreWithManager;

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([nameKey, reducer]) => {
            const mounted = mountedReducers[nameKey as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(nameKey as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${nameKey} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((nameKey) => {
                    store.reducerManager.remove(nameKey as StateSchemaKey);
                    dispatch({ type: `@Destroy ${nameKey} reducer` });
                });
            }
        };

        // eslint-disable-next-line
    }, []);
};

export { useDynamicModule };
