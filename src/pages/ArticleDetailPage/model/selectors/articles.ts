import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { getArticleDetailData } from 'entities/Article';

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
