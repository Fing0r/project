import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NotificationsItem.module.scss';
import { Notification } from '../../modal/types/notification';

interface NotificationsItemProps {
    className?: string;
    notification: Notification;
}

const NotificationsItem = memo((props: NotificationsItemProps) => {
    const {
        className,
        notification,
    } = props;

    if (notification.href) {
        return (
            <Card isBorder={false} className={classNames(cls.NotificationsItem, {}, [className])}>
                <AppLink
                    className={cls.link}
                    to={notification.href}
                >
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
        <Card isBorder={false} className={classNames(cls.NotificationsItem, {}, [className])}>
            <Text
                title={notification.title}
                text={notification.description}
            />
        </Card>
    );
});

export { NotificationsItem };
