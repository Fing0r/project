import React, { memo } from 'react';

import cls from './ArticleViewSelector.module.scss';

import { ArticleView } from '@/entities/Article';
import GridIcon from '@/shared/assets/icons/grid.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticleViewSelectorProps {
    className?: string;
    onViewClick?: (view: ArticleView) => void;
    currentView?: ArticleView;
}

interface Selector {
    view: ArticleView;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
    const { className, onViewClick, currentView } = props;

    const onClick = (view: ArticleView) => () => {
        onViewClick?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewType.map(({ view, icon }) => (
                <Button
                    key={view}
                    className={classNames(cls.button, {
                        [cls.selected]: currentView === view,
                    })}
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
