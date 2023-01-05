import { Notification } from '../modal/types/notification';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => {
                return {
                    url: '/notifications',
                };
            },
        }),
    }),
});

export const { useGetNotificationsQuery: useNotifications } = notificationApi;
