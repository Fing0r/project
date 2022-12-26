import { EntityState } from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';

export interface ArticleCommentListSchema extends EntityState<Comment>{
    isLoading: boolean,
    error?: string,
}
