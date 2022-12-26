import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getArticleCommentsListIsLoading } from '../../model/selectors/comments';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleCommentListReducer, getArticleComments } from '../../model/slice/articleCommentListSlice';

import cls from './ArticleCommentList.module.scss';

import { CommentList } from '@/entities/Comment';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';

interface ArticleCommentListProps {
    className?: string;
    id: string;
}

const initialReducers: ReducersList = {
    articleDetailComments: articleCommentListReducer,
};

const ArticleCommentList = memo((props: ArticleCommentListProps) => {
    const {
        className,
        id,
    } = props;

    useDynamicModule(initialReducers, true);
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoadingComments = useSelector(getArticleCommentsListIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <div className={classNames(cls.ArticleCommentList, {}, [className])}>
            <CommentList comments={comments} isLoading={isLoadingComments} />
        </div>
    );
});

export { ArticleCommentList };
