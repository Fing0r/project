import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </>
        );
    }

    if (!comments?.length) {
        return <Text text={t('Комментариев нет')} />;
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    comment={comment}
                />
            ))}
        </div>
    );
});

export { CommentList };
