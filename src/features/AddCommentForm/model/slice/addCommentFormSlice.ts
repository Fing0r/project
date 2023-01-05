import { PayloadAction } from '@reduxjs/toolkit';

import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

import { buildSlice } from '@/shared/lib/store';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = buildSlice({
    name: 'AddCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
    useActions: useAddCommentFormActions,
} = addCommentFormSlice;
