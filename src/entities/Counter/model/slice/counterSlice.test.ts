import { counterActions, counterReducer, CounterSchema } from 'entities/Counter';

describe('counterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test('undefined increment', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });

    test('decrement', () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });

    test('undefined decrement', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({
            value: -1,
        });
    });
});
