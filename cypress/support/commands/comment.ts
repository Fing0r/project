import { User } from '../../../src/entities/User';

export const addComment = (text?: string) => {
    cy.getByTestId('CommentForm.Input').type(text ?? 'Test');
    cy.getByTestId('CommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text?: string): Chainable<User>;
        }
    }
}
