describe('Страница профиля', () => {
    const newFirstName = 'newFirstName';
    const newLastName = 'newLastName';
    context.skip('Через API', () => {
        let profileId = '';
        beforeEach(() => {
            cy.visit('');
            cy.login().then(({ id }) => {
                profileId = id;
                cy.visit(`/profile/${profileId}`);
            });
        });

        afterEach(() => {
            cy.resetProfile(profileId);
        });

        it('Должна загрузиться страница профиля', () => {
            cy.getByTestId('EditableProfileCard.firstName').should(
                'have.value',
                'testfirstname',
            );
        });

        it('Должен измениться профиль', () => {
            cy.updateProfile(newFirstName, newLastName);
            cy.getByTestId('EditableProfileCard.firstName').should(
                'have.value',
                newFirstName,
            );
            cy.getByTestId('EditableProfileCard.lastName').should(
                'have.value',
                newLastName,
            );
        });
    });

    context.skip('Через стабы', () => {
        beforeEach(() => {
            cy.visit('');
            cy.login();
        });

        it('Должен измениться профиль', () => {
            cy.visit('/profile/4');
            cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
            cy.getByTestId('EditableProfileCard.firstName').should(
                'have.value',
                'Ignatasdfd',
            );
            // cy.updateProfile(newFirstName, newLastName);
            cy.getByTestId('EditableProfileCard.edit').click();
            cy.getByTestId('EditableProfileCard.firstName')
                .clear()
                .type(newFirstName);
            cy.getByTestId('EditableProfileCard.lastName')
                .clear()
                .type(newLastName);
            cy.intercept('PUT', '**/profile/*');
            cy.getByTestId('EditableProfileCard.save').click();
            cy.getByTestId('EditableProfileCard.firstName').should(
                'have.value',
                newFirstName,
            );
            cy.getByTestId('EditableProfileCard.lastName').should(
                'have.value',
                newLastName,
            );
        });
    });
});
