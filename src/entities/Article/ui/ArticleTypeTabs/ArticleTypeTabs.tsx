import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleType } from 'entities/Article';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    onChange: (tab: ArticleType) => void;
    value: ArticleType;
}

const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        onChange,
        value,
    } = props;

    const { t } = useTranslation();

    const tabs = useMemo<TabItem<ArticleType>[]>(() => ([
        { value: ArticleType.ALL, text: t('Все') },
        { value: ArticleType.IT, text: t('Айти') },
        { value: ArticleType.ECONOMICS, text: t('Экономика') },
        { value: ArticleType.SCIENCE, text: t('Наука') },
    ]), [t]);

    return (
        <div className={classNames(cls.ArticleTypeTabs, {}, [className])}>
            <Tabs
                tabs={tabs}
                currentValue={value}
                onClickTab={onChange}
            />
        </div>
    );
});

export { ArticleTypeTabs };
