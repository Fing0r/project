import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('check work', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
