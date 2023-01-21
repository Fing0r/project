import { ComponentProps, ElementType } from 'react';

import { Flex, FlexOwnProps } from '../Flex/Flex';

type VStackProps<E extends ElementType> = Omit<FlexOwnProps<E>, 'direction'> &
    Omit<ComponentProps<E>, keyof FlexOwnProps>;

const VStack = <E extends ElementType = keyof HTMLElementTagNameMap>(
    props: VStackProps<E>,
) => {
    const { children, ...otherProps } = props;

    return (
        <Flex {...otherProps} direction="column">
            {children}
        </Flex>
    );
};

export { VStack };
