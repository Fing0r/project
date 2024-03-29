import { memo } from 'react';

import { Comment } from '../../model/types/comment';

import cls from './CommentCard.module.scss';

import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize } from '@/shared/ui/Text';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius="50%" />
                    <Skeleton height={20} width={100} />
                </div>
                <Skeleton height={50} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="Comment.Item"
        >
            <AppLink
                className={cls.header}
                to={getRouteProfile(comment.user.id)}
            >
                {comment?.user.avatar ? (
                    <Avatar src={comment.user.avatar} size={30} />
                ) : null}
                <Text title={comment?.user.username} size={TextSize.S} />
            </AppLink>
            <Text text={comment?.text} />
        </div>
    );
});

export { CommentCard };
