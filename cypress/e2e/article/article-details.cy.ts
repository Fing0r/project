describe('Статья', () => {
    context('Через API', () => {
        let articleId = '';
        beforeEach(() => {
            cy.login();
            cy.createArticle().then(({ id }) => {
                articleId = id;
                cy.visit(`articles/${articleId}`);
            });
        });

        afterEach(() => {
            cy.deleteArticle(articleId);
        });

        it('Должна загрузиться статья', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist');
        });

        it('Должны загрузиться рекомендованные статьи', () => {
            cy.getByTestId('ArticleRecommendationsList').should('exist');
        });

        it.skip('Пример скипа теста', () => {
            cy.getByTestId('TestSkip').should('exist');
        });

        it('Должнены добавиться комментарии', () => {
            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('CommentForm').should('exist').scrollIntoView();
            cy.addComment('Test 1');
            cy.getByTestId('Comment.Item').should('have.length', 1);
            cy.addComment('Test 2');
            cy.getByTestId('Comment.Item').should('have.length', 2);
        });

        it('Должнен поставить оценку', () => {
            const starCount = 4;

            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('Rating.Card').should('exist');
            cy.getByTestId('Rating.Card').scrollIntoView();
            cy.setRate(starCount, 'test');
            cy.get('[data-selected=true]').should('have.length', starCount);
        });
    });

    context.skip('Через стабы', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Должнен поставить оценку', () => {
            cy.visit('articles/test');
            cy.intercept('GET', '**/articles/*', {
                fixture: 'article-details.json',
            });
            cy.getByTestId('ArticleDetails.Info').should('exist');
            cy.getByTestId('Rating.Card').should('exist');
            cy.getByTestId('Rating.Card').scrollIntoView();
            cy.setRate(4, 'test');
            cy.get('[data-selected=true]').should('have.length', 4);
        });
    });
});
