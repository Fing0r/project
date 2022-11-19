import {
    memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getPageScrollByPath } from 'widgets/Page/model/selectors/page';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { pageActions } from '../model/slices/pageSlice';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const dispatch = useAppDispatch();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));

    useInfiniteScroll({
        callback: onScrollEnd,
        wrapperRef,
        triggerRef,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onSaveScroll = useThrottle(
        (e: UIEvent<HTMLDivElement>) => {
            dispatch(pageActions.setScrollPosition(
                {
                    path: pathname,
                    position: e.currentTarget.scrollTop,
                },
            ));
        },
        300,
    );

    return (
        <section
            onScroll={onSaveScroll}
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
        </section>
    );
});

export { Page };
