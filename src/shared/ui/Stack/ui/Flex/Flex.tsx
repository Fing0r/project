import { classNames } from 'shared/lib/classNames/classNames';
import { ComponentProps, ElementType, ReactNode } from 'react';
import cls from './Flex.module.scss';

type JustifyFlex = 'between' | 'center' | 'start' | 'end' | 'around' | 'evenly';
type AlignFlex = 'start' | 'center' | 'end';
type DirectionFlex = 'row' | 'column';
type GapFlex = '4' | '8' | '12' | '16' | '24' | '32';
type WrapFlex = 'wrap' | 'nowrap';

const JustifyClasses: Record<JustifyFlex, string> = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd,
    around: cls.justifyAround,
    evenly: cls.justifyEvenly,
    between: cls.justifyBetween,
};

const GapClasses: Record<GapFlex, string> = {
    4: cls.gap4,
    8: cls.gap8,
    12: cls.gap12,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32,
};

const AlignClasses: Record<AlignFlex, string> = {
    center: cls.alignCenter,
    start: cls.alignStart,
    end: cls.alignEnd,
};

const WrapClasses: Record<WrapFlex, string> = {
    wrap: cls.wrapWrap,
    nowrap: cls.wrapNoWrap,
};

const DirectionClasses: Record<DirectionFlex, string> = {
    column: cls.directionColumn,
    row: cls.directionRow,
};

export interface FlexOwnProps<E extends ElementType = ElementType> {
    justify?: JustifyFlex;
    align?: AlignFlex;
    direction?: DirectionFlex;
    wrap?: WrapFlex;
    gap?: GapFlex;
    max?: boolean;
    children: ReactNode;
    className?: string;
    tag?: E;
}

export type FlexProps<E extends ElementType> = FlexOwnProps<E> & Omit<ComponentProps<E>, keyof FlexOwnProps<E>>;

// type TagsVariants = 'div' | 'section'
// const Flex = <
//     E extends ElementType = TagsVariants,
//     T extends TagsVariants = E extends TagsVariants ? E : never>(props: FlexProps<T>,
//     ) => {

const Flex = <E extends ElementType = keyof HTMLElementTagNameMap>(props: FlexProps<E>) => {
    const {
        justify = 'start',
        align,
        direction = 'row',
        wrap,
        max,
        gap,
        children,
        className,
        tag,
        ...otherProps
    } = props;

    const flexProperty = [
        className,
        JustifyClasses[justify],
        align && AlignClasses[align],
        DirectionClasses[direction],
        gap && GapClasses[gap],
        wrap && WrapClasses[wrap],
    ];

    const Tag = tag || 'div';

    return (
        <Tag {...otherProps} className={classNames(cls.Flex, { [cls.max]: max }, flexProperty)}>
            {children}
        </Tag>
    );
};

export { Flex };
