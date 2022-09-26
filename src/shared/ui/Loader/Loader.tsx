import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

const Loader = () => (
    <div
        className={classNames(cls.LdsEllipsis)}
    >
        <div />
        <div />
        <div />
        <div />
    </div>
);

export { Loader };
