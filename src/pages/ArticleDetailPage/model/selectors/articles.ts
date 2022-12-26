import { createSelector } from '@reduxjs/toolkit';

import { getArticleDetailData } from '@/entities/Article';
import { getAuthData } from '@/entities/User';

export const getArticleCanEdit = createSelector(
    getAuthData,
    getArticleDetailData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }

        return user.id === article.user.id;
    },
);
