import { getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: '123',
        });

        expect(params).toBe('?test=123');
    });

    test('test with multi params', () => {
        const params = getQueryParams({
            test: '123',
            qwe: '321',
        });

        expect(params).toBe('?test=123&qwe=321');
    });

    test('test with one undefined param', () => {
        const params = getQueryParams({
            test: '123',
            qwe: undefined,
        });

        expect(params).toBe('?test=123');
    });

    test('test with all undefined params', () => {
        const params = getQueryParams({
            test: undefined,
            qwe: undefined,
        });

        expect(params).toBe('?');
    });
});
