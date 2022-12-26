import { getReadonly } from './getReadonly';

import { StateSchema } from '@/app/providers/StoreProvider';

describe('getReadonly', () => {
    test('works with the correct state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: false },
        };

        expect(getReadonly(state as StateSchema)).toBe(false);
    });

    test('works with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getReadonly(state as StateSchema)).toBe(undefined);
    });
});
