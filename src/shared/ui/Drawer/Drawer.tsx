import {
    memo, ReactNode, useCallback, useEffect, useRef,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAnimation } from '@/shared/lib/AnimationProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent = memo((props: DrawerProps) => {
    const { Spring, Gesture } = useAnimation();
    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;

    const open = useCallback(() => {
        api.start({ y: 0, immediate: false, config: Spring.config.stiff });
    }, [Spring.config.stiff, api]);

    useEffect(() => {
        if (isOpen) {
            open();
        }
    }, [isOpen, open]);

    const close = useCallback((velocity: number = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    }, [Spring.config.stiff, api, onClose]);

    const ref = useRef<HTMLButtonElement | null>(null);

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
            currentTarget,
            target,
        }) => {
            const isTargetChildren = target !== currentTarget && target !== ref.current;
            if (my < -70 || isTargetChildren) {
                cancel();
            }
            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    open();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        },
    );

    const handleClose = useCallback(
        (velocity: number = 0) => () => close(velocity),
        [close],
    );

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className])}>
                <Overlay onClose={handleClose()} />
                <Spring.a.div
                    style={{ display, bottom: `calc(-100vh + ${height}px - 6.25rem)`, y }}
                    className={cls.content}
                    {...bind()}
                >
                    <button
                        aria-label="close drawer button"
                        type="button"
                        ref={ref}
                        onClick={handleClose()}
                        className={cls.closeBtn}
                    />
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const Drawer = memo((props: DrawerProps) => {
    const { isLoading } = useAnimation();

    if (!isLoading) {
        return null;
    }

    return <DrawerContent {...props} />;
});

export { Drawer };
