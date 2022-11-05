import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('../LoginForm/LoginForm')
//     .then((component) => ({ default: component.LoginForm })));

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('../LoginForm/LoginForm')), 1000);
}));

export { LoginFormAsync };
