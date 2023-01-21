import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18n from '@/shared/config/i18n/i18nForTests';
import { ThemeEnum } from '@/shared/const/theme';
// eslint-disable-next-line check-paths-for-fsd-methodology/layer-imports
import '@/app/styles/index.scss';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: ThemeEnum;
}

interface TestProviderProps {
    children: ReactNode;
    options: componentRenderOptions;
}

function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
        asyncReducers,
        initialState,
        theme = ThemeEnum.GREEN,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <I18nextProvider i18n={i18n}>
                    <ThemeProvider initialTheme={theme}>
                        <div className="app">{children}</div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

function componentRender(
    component: ReactNode,
    options: componentRenderOptions = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}

export { componentRender, TestProvider };
