import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types';
import { ArticleFieldSort } from '../../model/types/article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleFieldSort;
    order: SortOrder;
    onChangeSort: (newSort: ArticleFieldSort) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeSort,
        onChangeOrder,
    } = props;

    const { t } = useTranslation();

    const sortOrderOptions = useMemo<SelectOption<SortOrder>[]>(() => ([
        { value: 'asc', text: t('Возрастания') },
        { value: 'desc', text: t('Убывания') },
    ]), [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleFieldSort>[]>(() => ([
        { value: ArticleFieldSort.CREATED, text: t('Дате') },
        { value: ArticleFieldSort.TITLE, text: t('Названию') },
        { value: ArticleFieldSort.VIEWS, text: t('Просмотрам') },
    ]), [t]);

    return (
        <div className={classNames('', {}, [className])}>
            <Select
                label={t('В порядке')}
                options={sortOrderOptions}
                value={order}
                onChange={onChangeOrder}
            />
            <Select
                label={t('Сортировать по')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
        </div>
    );
});

export { ArticleSortSelector };
