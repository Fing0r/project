import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, useMemo } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = useMemo(() => createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    ), [asyncReducers, initialState]);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };
