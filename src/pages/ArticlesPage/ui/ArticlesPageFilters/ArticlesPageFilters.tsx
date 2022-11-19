import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])} />
    );
});

export { ArticlesPageFilters };
