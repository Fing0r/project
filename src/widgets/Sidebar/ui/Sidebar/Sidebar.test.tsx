import { screen, render, fireEvent } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });

    test('render collapsed Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('toggle');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
