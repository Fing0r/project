import { AddCommentFormSchema } from '../types/AddCommentFormSchema';

import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice', () => {
    test('should return default state when passed an empty action', () => {
        const result = addCommentFormReducer(undefined, { type: '' });

        expect(result).toEqual({ text: '' });
    });

    test('should change text with "setText" action', () => {
        const state: DeepPartial<AddCommentFormSchema> = {};
        const result = addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('123123'));

        expect(result).toEqual({ text: '123123' });
    });
});
