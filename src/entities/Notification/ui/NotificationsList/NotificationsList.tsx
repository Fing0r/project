import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import { NotificationsItem } from '../NotificationsItem/NotificationsItem';

interface NotificationsListProps {
    className?: string;
}

const NotificationsList = memo((props: NotificationsListProps) => {
    const {
        className,
    } = props;

    const {
        data: notifications,
        isLoading,
    } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="4"
                className={classNames('', {}, [className])}
            >
                <Skeleton width="100%" height={81} />
                <Skeleton width="100%" height={81} />
                <Skeleton width="100%" height={81} />
                <Skeleton width="100%" height={81} />
            </VStack>
        );
    }

    return (
        <VStack
            max
            className={classNames('', {}, [className])}
        >
            {notifications?.map((notification) => (
                <NotificationsItem
                    notification={notification}
                    key={notification.id}
                />
            ))}
        </VStack>
    );
});

export { NotificationsList };
