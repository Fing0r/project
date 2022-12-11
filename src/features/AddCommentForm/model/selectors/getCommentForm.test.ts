import { StateSchema } from '@/app/providers/StoreProvider';
import { getCommentFormError, getCommentFormText } from './getCommentForm';

describe('getCommentForm', () => {
    test('should return text from state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { text: 'test' },
        };

        expect(getCommentFormText(state as StateSchema)).toBe('test');
    });

    test('should return default text with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormText(state as StateSchema)).toBe('');
    });

    test('should return error from state', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: { error: 'error' },
        };

        expect(getCommentFormError(state as StateSchema)).toBe('error');
    });

    test('should return undefined with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getCommentFormError(state as StateSchema)).toBe(undefined);
    });
});
