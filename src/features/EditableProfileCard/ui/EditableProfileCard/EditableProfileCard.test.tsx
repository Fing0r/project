import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'user',
    lastname: 'user',
    age: 13,
    currency: Currency.USD,
    country: Country.Kazakhstan,
    city: 'Karaganda',
    username: 'solo',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'solo' },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('features/EditableProfileCard', () => {
    beforeEach(() => {
        componentRender(<EditableProfileCard id="1" />, options);
    });

    test('render EditableProfileCard', () => {
        const profileCard = screen.getByTestId('EditableProfileCard');
        expect(profileCard).toBeInTheDocument();
    });

    test('Должна появится кнопка сохранить профиль и переключиться режим readonly', async () => {
        expect(screen.getByTestId('EditableProfileCard.edit')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('EditableProfileCard.edit'));
        expect(screen.getByTestId('EditableProfileCard.save')).toBeInTheDocument();
    });

    test('Должны отмениться изменнения при нажатие кноки отмена', async () => {
        expect(screen.getByTestId('EditableProfileCard.edit')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('EditableProfileCard.edit'));

        const inputFirstName = screen.getByTestId('EditableProfileCard.firstName');
        const inputSecondName = screen.getByTestId('EditableProfileCard.secondName');

        expect(inputFirstName).toBeInTheDocument();
        expect(inputSecondName).toBeInTheDocument();

        expect(inputFirstName).toHaveValue('user');
        expect(inputSecondName).toHaveValue('user');

        await userEvent.clear(inputFirstName);
        await userEvent.clear(inputSecondName);

        await userEvent.type(inputFirstName, 'qwerty321');
        await userEvent.type(inputSecondName, 'qwerty123');

        expect(inputFirstName).toHaveValue('qwerty321');
        expect(inputSecondName).toHaveValue('qwerty123');

        await userEvent.click(screen.getByTestId('EditableProfileCard.cancel'));

        expect(inputFirstName).toHaveValue('user');
        expect(inputSecondName).toHaveValue('user');
    });

    test('Должны отправиться запрос на сервер при валидных данных', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        expect(screen.getByTestId('EditableProfileCard.edit')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('EditableProfileCard.edit'));

        const inputFirstName = screen.getByTestId('EditableProfileCard.firstName');

        await userEvent.clear(inputFirstName);

        await userEvent.type(inputFirstName, 'qwerty321');

        await userEvent.click(screen.getByTestId('EditableProfileCard.save'));

        expect(mockPutReq).toHaveBeenCalled();
    });

    test('Должно появится поле ошибка', async () => {
        expect(screen.getByTestId('EditableProfileCard.edit')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('EditableProfileCard.edit'));

        const inputFirstName = screen.getByTestId('EditableProfileCard.firstName');
        const inputSecondName = screen.getByTestId('EditableProfileCard.secondName');

        expect(inputFirstName).toBeInTheDocument();
        expect(inputSecondName).toBeInTheDocument();

        expect(inputFirstName).toHaveValue('user');

        await userEvent.clear(inputFirstName);

        await userEvent.click(screen.getByTestId('EditableProfileCard.save'));

        expect(screen.getByTestId('EditableProfileCard.error.paragraph')).toBeInTheDocument();
    });
});
