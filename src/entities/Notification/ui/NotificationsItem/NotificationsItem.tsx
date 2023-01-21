import { memo } from 'react';

import { Notification } from '../../modal/types/notification';

import cls from './NotificationsItem.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface NotificationsItemProps {
    className?: string;
    notification: Notification;
}

const NotificationsItem = memo((props: NotificationsItemProps) => {
    const { className, notification } = props;

    if (notification.href) {
        return (
            <Card
                isBorder={false}
                className={classNames(cls.NotificationsItem, {}, [className])}
            >
                <AppLink className={cls.link} to={notification.href}>
                    <Text
                        className={cls.text}
                        title={notification.title}
                        text={notification.description}
                    />
                </AppLink>
            </Card>
        );
    }

    return (
        <Card
            isBorder={false}
            className={classNames(cls.NotificationsItem, {}, [className])}
        >
            <Text title={notification.title} text={notification.description} />
        </Card>
    );
});

export { NotificationsItem };
