import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean
}

const LoginForm = (props: LoginFormProps) => {
    const { className, isOpen } = props;
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                label={t('Введите логин')}
                theme={InputTheme.OUTLINE}
                autofocus={isOpen}
            />
            <Input
                label={t('Введите пароль')}
                theme={InputTheme.OUTLINE}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
            >
                {t('Войти')}
            </Button>
        </form>
    );
};

export { LoginForm };
