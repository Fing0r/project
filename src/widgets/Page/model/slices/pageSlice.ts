import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { PageSchema, ScrollPayload } from '../types/pageSchema';

const initialState: PageSchema = {
    scroll: {},
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<ScrollPayload>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: pageActions, reducer: pageReducer } = pageSlice;
