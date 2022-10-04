import { screen, render } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('render clear Button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
