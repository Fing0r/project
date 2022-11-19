import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, useMemo } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducer,
    } = props;

    const store = useMemo(() => createReduxStore(
        initialState as StateSchema,
        asyncReducer as ReducersMapObject<StateSchema>,
    ), [asyncReducer, initialState]);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };
