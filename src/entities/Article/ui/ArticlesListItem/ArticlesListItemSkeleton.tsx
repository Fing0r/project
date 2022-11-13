import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticlesListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticlesListItemProps {
    className?: string;
    view: ArticleView;
}

const ArticlesListItemSkeleton = memo((props: ArticlesListItemProps) => {
    const {
        className,
        view = ArticleView.GRID,
    } = props;

    if (view === ArticleView.LIST) {
        return (
            <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} className={cls.avatar} borderRadius="50%" />
                    <Skeleton width={40} height={16} />
                    <Skeleton width={65} height={16} className={cls.date} />
                </div>
                <Skeleton height={24} className={cls.title} />
                <Skeleton width={100} height={16} className={cls.type} />
                <div className={cls.imgWrapper}>
                    <Skeleton className={cls.img} />
                </div>
                <Skeleton height={200} className={cls.paragraph} />
                <div className={cls.footer}>
                    <Skeleton width={165} height={48} />
                    <Skeleton width={65} height={16} className={cls.views} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
            <Skeleton width={200} height={200} className={cls.img} />
            <div className={cls.infoHeader}>
                <Skeleton className={cls.type} width="100%" height={16} />
                <Skeleton width={65} height={16} />
            </div>
            <Skeleton height={24} />
        </Card>
    );
});

export { ArticlesListItemSkeleton };
