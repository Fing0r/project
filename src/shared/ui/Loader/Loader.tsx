import cls from './Loader.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';

const Loader = () => (
    <div className={classNames(cls.LdsEllipsis)}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export { Loader };
