import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected);
    });

    test('with mods true', () => {
        const expected = 'someClass isActive';
        expect(classNames(
            'someClass',
            { isActive: true },
        )).toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass';
        expect(classNames(
            'someClass',
            { isActive: false },
        )).toBe(expected);
    });

    test('with mods undefined', () => {
        const expected = 'someClass';
        expect(classNames(
            'someClass',
            { isActive: undefined },
        )).toBe(expected);
    });

    test('with mods true and false', () => {
        const expected = 'someClass isClose';
        expect(classNames(
            'someClass',
            { isClose: true, isActive: false },
        )).toBe(expected);
    });

    test('with all params', () => {
        const expected = 'someClass class1 class2 isActive';
        expect(classNames(
            'someClass',
            { isActive: true },
            ['class1 class2'],
        )).toBe(expected);
    });

    test('with all params and false mods', () => {
        const expected = 'someClass class1';
        expect(classNames(
            'someClass',
            { isActive: false },
            ['class1'],
        )).toBe(expected);
    });
});
