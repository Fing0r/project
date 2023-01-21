import { lazy } from 'react';

const LoginFormAsync = lazy(async () => {
    return import('./LoginForm').then((component) => ({
        default: component.LoginForm,
    }));
});

export { LoginFormAsync };

// Для такого lazy компонента нужен дефолтный экспорт, тоесть export default LoginForm,
// также в дженерик нужно передать пропсы самого компонента
// const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./LoginForm')), 1000);
// }));
//
