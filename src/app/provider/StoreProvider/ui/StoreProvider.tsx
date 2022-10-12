import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore, StateSchema } from '..';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
}

const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export { StoreProvider };
