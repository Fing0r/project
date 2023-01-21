import React, { memo, SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo(({ className, Svg, ...otherProps }: IconProps) => (
    <Svg {...otherProps} className={className} />
));

export { Icon };
