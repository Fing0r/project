import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface ProfileRatingArgs {
    userId: string;
    profileId: string;
}

interface SetProfileRatingArgs extends Rating{
    userId: string;
    profileId: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Rating[], ProfileRatingArgs>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        setProfileRating: build.mutation<void, SetProfileRatingArgs>({
            query: ({
                profileId,
                userId,
                rating,
                feedback,
            }) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: {
                    profileId,
                    userId,
                    rating,
                    feedback,
                },
            }),
        }),
    }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useSetProfileRating = profileRatingApi.useSetProfileRatingMutation;
