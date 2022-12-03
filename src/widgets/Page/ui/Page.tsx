import {
    memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getPageScrollByPath } from '../model/selectors/page';
import { pageActions } from '../model/slices/pageSlice';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
    customWrapperRef?: MutableRefObject<HTMLDivElement>;
}

export const PAGE_ID = 'page';

const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        customWrapperRef,
    } = props;
    const dispatch = useAppDispatch();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));

    useInfiniteScroll({
        callback: onScrollEnd,
        wrapperRef: customWrapperRef || wrapperRef,
        triggerRef,
    });

    useInitialEffect(() => {
        if (customWrapperRef) {
            customWrapperRef.current.scrollTop = scrollPosition;
        } else {
            wrapperRef.current.scrollTop = scrollPosition;
        }
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
        <main
            onScroll={onSaveScroll}
            id={PAGE_ID}
            ref={customWrapperRef || wrapperRef}
            className={classNames(cls.Page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
        </main>
    );
});

export { Page };
