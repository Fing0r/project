describe('Роутинг', () => {
    let profileId = '';

    it('Главная страница загрузилась', () => {
        cy.visit('/');
        cy.getByTestId('MainPage').should('exist');
    });

    it('При не существующем маршруте редирект на NotFoundPage', () => {
        cy.visit('/testNotFoundPage');
        cy.getByTestId('NotFoundPage').should('exist');
    });

    context('Пользователь не авторизован', () => {
        it('Должно перенаправить на главную страницу', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
    });

    context('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login().then(({ id }) => {
                profileId = id;
            });
        });

        it('Должна загрузиться страница профиля', () => {
            cy.visit(`/profile/${profileId}}`);
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Должна загрузиться страница статей', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
