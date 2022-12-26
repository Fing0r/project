import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import cls from './NotificationsButton.module.scss';

import { NotificationsList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const { className } = props;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const icon = <Icon Svg={NotificationIcon} className={cls.popoverTrigger} />;

    return (
        <>
            <BrowserView renderWithFragment>
                <Popover className={className} trigger={icon}>
                    <NotificationsList className={cls.list} />
                </Popover>
            </BrowserView>
            <MobileView renderWithFragment>
                <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR} className={cls.btn}>
                    {icon}
                </Button>
                <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} fullWidth>
                    <NotificationsList className={cls.listDrawer} />
                </Drawer>
            </MobileView>
        </>

    );
});
