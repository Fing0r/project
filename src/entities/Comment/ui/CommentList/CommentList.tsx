import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import cls from './CommentList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;

    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </>
        );
    }

    return (
        <div
            className={classNames(cls.CommentList, {}, [className])}
            data-testid="Comment.List"
        >
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))
            ) : (
                <Text text={t('Комментариев нет')} />
            )}
        </div>
    );
});

export { CommentList };
