import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import {
    FormEvent,
    memo,
    useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getIsLoading } from '../../model/selectors/getLoading/getIsLoading';
import { getError } from '../../model/selectors/getError/getError';
import cls from './LoginForm.module.scss';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
    isOpen?: boolean
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        isOpen,
        onSuccess,
    } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    useDynamicModule(initialReducers, true);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setAuthUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setAuthPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    if (username === undefined) {
        return null;
    }

    return (
        <form
            onSubmit={onLoginClick}
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Авторизация')} />
            {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
            <Input
                label={t('Введите логин')}
                theme={InputTheme.OUTLINE}
                onChange={onChangeUsername}
                value={username}
                autofocus={isOpen}
            />
            <Input
                label={t('Введите пароль')}
                theme={InputTheme.OUTLINE}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                type="submit"
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </form>
    );
});

export default LoginForm;
