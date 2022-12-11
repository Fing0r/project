import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Popover } from '@/shared/ui/Popups/ui';
import { Icon } from '@/shared/ui/Icon/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationsList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { AnimationProvider } from '@/shared/lib/AnimationProvider';
import cls from './NotificationsButton.module.scss';

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
                <AnimationProvider>
                    <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                        <NotificationsList className={cls.listDrawer} />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </>

    );
});
