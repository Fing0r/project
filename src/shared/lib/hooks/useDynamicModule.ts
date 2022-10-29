import { useDispatch, useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [nameKey in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

const useDynamicModule = (reducers: ReducersList, removeAfterUnmount?: boolean) => {
    const dispatch = useDispatch();

    const store: StoreWithManager = useStore();

    useEffect(() => {
        Object.entries(reducers).forEach(([nameKey, reducer]: ReducersListEntry) => {
            store.reducerManager.add(nameKey, reducer);
            dispatch({ type: `@INIT ${nameKey} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.keys(reducers).forEach((nameKey: StateSchemaKey) => {
                    dispatch({ type: `@Destroy ${nameKey} reducer` });
                    store.reducerManager.remove(nameKey);
                });
            }
        };

        // eslint-disable-next-line
    }, []);
};

export { useDynamicModule };
