import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface ArticleRatingArgs {
    userId: string;
    articleId: string;
}

interface SetArticleRatingArgs extends Rating{
    userId: string;
    articleId: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], ArticleRatingArgs>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        setArticleRating: build.mutation<void, SetArticleRatingArgs>({
            query: ({
                articleId,
                userId,
                rating,
                feedback,
            }) => ({
                url: '/article-ratings',
                method: 'POST',
                body: {
                    articleId,
                    userId,
                    rating,
                    feedback,
                },
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useSetArticleRating = articleRatingApi.useSetArticleRatingMutation;
