import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render Counter', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

        const counterVal = screen.getByTestId('counter-value');
        expect(counterVal).toHaveTextContent('10');
    });

    test('Counter click increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

        const counterVal = screen.getByTestId('counter-value');
        expect(counterVal).toBeInTheDocument();

        const decrementBtn = screen.getByTestId('btn-decrement');
        fireEvent.click(decrementBtn);
        expect(counterVal).toHaveTextContent('9');
    });

    test('Counter click decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

        const counterVal = screen.getByTestId('counter-value');
        expect(counterVal).toBeInTheDocument();

        const incrementBtn = screen.getByTestId('btn-increment');
        fireEvent.click(incrementBtn);
        expect(counterVal).toHaveTextContent('11');
    });
});
