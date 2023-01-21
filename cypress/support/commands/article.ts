import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Test Article Title',
    subtitle: 'Test Article SubTitle',
    img: '',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            body: article ?? defaultArticle,
            headers: {
                Authorization: 'Authorization',
            },
        })
        .then(({ body }) => {
            return body;
        });
};

export const deleteArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: 'Authorization',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            deleteArticle(articleId: string): Chainable<void>;
        }
    }
}
