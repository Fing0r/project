import { lazy } from 'react';

const LoginFormAsync = lazy(async () => {
    // фейковая задерка в 1 секунду
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 400));

    return import('./LoginForm')
        .then((component) => ({ default: component.LoginForm }));
});

export { LoginFormAsync };

// Для такого lazy компонента нужен дефолтный экспорт, тоесть export default LoginForm,
// также в дженерик нужно передать пропсы самого компонента
// const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
//     // @ts-ignore
//     setTimeout(() => resolve(import('./LoginForm')), 1000);
// }));
//
