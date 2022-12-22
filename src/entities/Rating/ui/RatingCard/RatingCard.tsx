import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Card } from '@/shared/ui/Card/Card';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    feedbackPlaceholder?: string;
    onAccept?: (rating: number, feedback?: string) => void;
    onCancel?: (rating: number) => void
    rating?: number;
    hasFeedback?: boolean;
}

const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        rating = 0,
        hasFeedback,
        feedbackPlaceholder,
        onAccept,
        onCancel,
    } = props;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [starCount, setStarCount] = useState(rating);
    const [feedback, setFeedback] = useState('');
    const { t } = useTranslation();

    const onSelectRating = useCallback((selectRating: number) => {
        setStarCount(selectRating);
        if (hasFeedback) {
            setIsOpenModal(true);
            return;
        }
        onAccept?.(selectRating);
    }, [hasFeedback, onAccept]);

    const cancelHandle = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starCount);
    }, [onCancel, starCount]);

    const acceptHandle = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starCount, feedback);
    }, [feedback, onAccept, starCount]);

    const content = (
        <>
            <Text
                titleVariant="h3"
                title={feedbackTitle}
            />
            <Input
                placeholder={feedbackPlaceholder}
                value={feedback}
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card>
            <VStack
                gap="12"
                align="center"
                className={classNames(cls.RatingCard, {}, [className])}
            >
                <Text
                    titleVariant="h3"
                    title={starCount ? t('Спасибо за вашу оценку') : title}
                />
                <StarRating
                    size={40}
                    ratingValue={starCount}
                    onSelect={onSelectRating}
                />
            </VStack>
            <BrowserView renderWithFragment>
                <Modal isOpen={isOpenModal} onClose={cancelHandle}>
                    <VStack gap="16" className={cls.modal}>
                        {content}
                        <HStack gap="16">
                            <Button max onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                max
                                onClick={cancelHandle}
                            >
                                {t('Закрыть')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView renderWithFragment>
                <Drawer isOpen={isOpenModal} onClose={cancelHandle}>
                    <VStack gap="16">
                        {content}
                        <HStack gap="16">
                            <Button max onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});

export { RatingCard };
