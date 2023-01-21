import { ComponentProps, ElementType } from 'react';

import { Flex, FlexOwnProps } from '../Flex/Flex';

type HStackProps<E extends ElementType> = Omit<FlexOwnProps<E>, 'direction'> &
    Omit<ComponentProps<E>, keyof FlexOwnProps>;

const HStack = <E extends ElementType = keyof HTMLElementTagNameMap>(
    props: HStackProps<E>,
) => {
    const { children, ...otherProps } = props;

    return (
        <Flex {...otherProps} direction="row">
            {children}
        </Flex>
    );
};

export { HStack };
