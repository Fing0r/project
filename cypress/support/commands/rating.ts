export const setRate = (starCount: number, feedback?: string) => {
    cy.getByTestId(`Rating.Star${starCount}`).click();
    cy.getByTestId('Rating.Input').type(feedback ?? '');
    cy.getByTestId('Rating.ConfirmFeedback').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, feedback?: string): Chainable<void>;
        }
    }
}
