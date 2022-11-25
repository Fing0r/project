import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import GridIcon from 'shared/assets/icons/grid.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    onViewClick?: (view: ArticleView) => void;
    currentView?: ArticleView;
}

interface Selector {
    view: ArticleView,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const viewType: Selector[] = [
    {
        view: ArticleView.GRID,
        icon: GridIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        onViewClick,
        currentView,
    } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewType.map(({ view, icon }) => (
                <Button
                    key={view}
                    className={classNames(cls.button, { [cls.selected]: currentView === view })}
                    onClick={onClick(view)}
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon Svg={icon} />
                </Button>
            ))}
        </div>
    );
});

export { ArticleViewSelector };
