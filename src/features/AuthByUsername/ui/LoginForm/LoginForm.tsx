import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { FormEvent, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        isOpen,
    } = props;
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setAuthUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setAuthPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

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

export { LoginForm };
