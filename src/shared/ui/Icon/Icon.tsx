import React from 'react';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon = ({ className, Svg }: IconProps) => (
    <Svg className={className} />
);

export { Icon };
