import { memo, useState } from 'react';

import { Icon } from '../Icon/Icon';
import { HStack } from '../Stack';

import cls from './StarRating.module.scss';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StarRatingProps {
    className?: string;
    size?: number;
    onSelect?: (rating: number) => void;
    ratingValue?: number;
}

const starsValues = [1, 2, 3, 4, 5];

const StarRating = memo((props: StarRatingProps) => {
    const { className, size = 30, ratingValue = 0, onSelect } = props;
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(ratingValue));
    const [currentRating, setCurrentRating] = useState<number>(ratingValue);
    const onHover = (selectRating: number) => () => {
        if (!isSelected) {
            setCurrentRating(selectRating);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentRating(0);
        }
    };

    const onClick = (selectRating: number) => () => {
        if (!isSelected) {
            setCurrentRating(selectRating);
            setIsSelected(true);
            onSelect?.(selectRating);
        }
    };

    return (
        <HStack data-testid="Rating.Stars" className={className}>
            {starsValues.map((starValue) => (
                <Icon
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starValue)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starValue)}
                    Svg={StarIcon}
                    key={starValue}
                    data-testid={`Rating.Star${starValue}`}
                    data-selected={currentRating >= starValue}
                    className={classNames('', {
                        [cls.isHovered]: currentRating >= starValue,
                        [cls.isNotSelected]: !isSelected,
                    })}
                />
            ))}
        </HStack>
    );
});

export { StarRating };
