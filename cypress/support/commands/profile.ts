export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCard.edit').click();
    cy.getByTestId('EditableProfileCard.firstName').clear().type(firstName);
    cy.getByTestId('EditableProfileCard.lastName').clear().type(lastName);
    cy.getByTestId('EditableProfileCard.save').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: 'Authorization',
        },
        body: {
            id: '4',
            first: 'testfirstname',
            lastname: 'testlastname',
            age: 100,
            city: 'Moscow',
            username: 'testuser',
            avatar: '',
            currency: 'USD',
            country: 'Kazakhstan',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
