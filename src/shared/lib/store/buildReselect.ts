import { createSelector } from '@reduxjs/toolkit';

// type Selector<T> = (state: StateSchema) => T;
// type Result<T> = [() => T, Selector<T>]

export type AppReselect = ReturnType<typeof createSelector>;

const buildReselect = ([...selectors]: any, func: any) => {
    // const selector = createSelector(...selectors, func);

    return () => {
        // return useSelector(selector);
    };
};

export { buildReselect };
