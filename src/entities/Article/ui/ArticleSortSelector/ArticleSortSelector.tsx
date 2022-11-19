import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleFieldSort } from 'entities/Article/model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    valueField: ArticleFieldSort;
    valueOrder: SortOrder;
    onChangeSort: (sort: ArticleFieldSort) => void;
    onChangeOrder: (order: SortOrder) => void;
}

interface SortOrderOption {
    value: SortOrder;
    text: string;
}

interface SortFieldOption {
    value: ArticleFieldSort;
    text: string;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        valueField,
        valueOrder,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation();

    const sortOrderOptions = useMemo<SortOrderOption[]>(() => ([
        { value: 'asc', text: t('Возрастания') },
        { value: 'desc', text: t('Убывания') },
    ]), [t]);

    const sortFieldOptions = useMemo<SortFieldOption[]>(() => ([
        { value: ArticleFieldSort.CREATED, text: t('Дате') },
        { value: ArticleFieldSort.TITLE, text: t('Названию') },
        { value: ArticleFieldSort.VIEWS, text: t('Просмотрам') },
    ]), [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('В порядке')}
                options={sortOrderOptions}
                value={valueOrder}
                onChange={onChangeOrder}
            />
            <Select
                label={t('Сортировать по')}
                options={sortFieldOptions}
                value={valueField}
                onChange={onChangeSort}
            />
        </div>
    );
});

export { ArticleSortSelector };
