describe('Список статей', () => {
    context.skip('Через API', () => {
        beforeEach(() => {
            cy.login().then(() => {
                cy.visit('articles');
            });
        });

        it('Должен загрузиться список статеи', () => {
            cy.getByTestId('ArticlesList').should('exist');
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                5,
            );
        });

        it('Должны загрузиться статьи при прокрутке вниз страницы', () => {
            cy.getByTestId('ArticlesList').should('exist');
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                5,
            );
            cy.getByTestId('PageTrigger').scrollIntoView();
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                11,
            );
        });

        context('Филтрация статей', () => {
            let articleId = '';
            beforeEach(() => {
                cy.createArticle().then(({ id }) => {
                    articleId = id;
                });
            });

            afterEach(() => {
                cy.deleteArticle(articleId);
            });

            it('Должен найти статью', () => {
                const searchValue = 'Test Article Title';
                cy.getByTestId('ArticlesList').should('exist');
                cy.getByTestId('ArticlePageFilter.Search').type(searchValue);
                cy.getByTestId('ArticlesListItem').should('exist');
                cy.getByTestId('ArticlesListItem.Title.header').should(
                    'contain.text',
                    searchValue,
                );
            });
        });
    });

    context('Через стабы', () => {
        beforeEach(() => {
            cy.login().then(() => {
                cy.visit('articles');
                cy.intercept('GET', '**/articles?*', {
                    fixture: 'articles-list.json',
                });
            });
        });

        it('Должен загрузиться список статеи', () => {
            cy.getByTestId('ArticlesList').should('exist');
            cy.getByTestId('ArticlesListItem').should(
                'have.length.greaterThan',
                4,
            );
        });
    });
});
