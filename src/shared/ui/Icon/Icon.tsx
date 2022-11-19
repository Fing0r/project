import React, { memo } from 'react';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = memo(({ className, Svg }: IconProps) => (
    <Svg className={className} />
));

export { Icon };
