import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ArticlesListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticlesListItemProps {
    className?: string;
    view: ArticleView;
}

const ArticlesListItemSkeleton = memo((props: ArticlesListItemProps) => {
    const {
        className,
        view,
    } = props;

    if (view === ArticleView.LIST) {
        return (
            <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <VStack gap="16">
                    <VStack gap="8">
                        <HStack gap="8" align="center">
                            <Skeleton width={30} height={30} className={cls.avatar} borderRadius="50%" />
                            <Skeleton width={40} height={16} />
                            <Skeleton width={65} height={16} className={cls.date} />
                        </HStack>
                        <Skeleton height={24} className={cls.title} />
                        <Skeleton width={100} height={16} className={cls.type} />
                    </VStack>
                    <div className={cls.imgWrapperSkeleton}>
                        <Skeleton className={cls.img} />
                    </div>
                    <Skeleton height={200} className={cls.paragraph} />
                    <HStack justify="between" gap="16" align="center">
                        <Skeleton width={165} height={48} />
                        <Skeleton width={65} height={16} />
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
            <VStack gap="16">
                <Skeleton width={200} height={200} className={cls.img} />
                <HStack justify="between" align="center" gap="8">
                    <Skeleton className={cls.type} width="100%" height={16} />
                    <Skeleton width={65} height={16} />
                </HStack>
                <Skeleton height={24} />
            </VStack>
        </Card>
    );
});

export { ArticlesListItemSkeleton };
