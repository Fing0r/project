import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render Sidebar', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
    });

    test('render collapsed Sidebar', () => {
        componentRender(<Sidebar />);
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        const toggleBtn = screen.getByTestId('toggle');
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
        fireEvent.click(toggleBtn);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
