import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC, useMemo } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { useNavigate } from 'react-router-dom';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

// @ts-ignore
let sdfasd;
const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducer,
    } = props;

    // const navigate = useNavigate();

    const store = useMemo(() => createReduxStore(
        initialState as StateSchema,
        asyncReducer as ReducersMapObject<StateSchema>,
        // navigate,
    ), [asyncReducer, initialState]);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };
