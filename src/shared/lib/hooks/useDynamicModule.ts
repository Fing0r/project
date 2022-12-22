import { useDispatch, useStore } from 'react-redux';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import type { StateSchema, StoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer<NonNullable<StateSchema[nameKey]>>
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
