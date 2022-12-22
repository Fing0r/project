import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Card } from '@/shared/ui/Card/Card';
import { Button } from '@/shared/ui/Button/Button';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType, ArticleView } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlesListItem.module.scss';
import {
    Article, ArticleTextBlock,
} from '../../model/types/article';
import { RoutePath } from '@/shared/const/router';

interface ArticlesListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.GRID,
        target,
    } = props;

    const { t } = useTranslation('articles');
    const navigate = useNavigate();

    const views = (
        <HStack gap="8" align="center" className={cls.views}>
            <Text text={String(article?.views || 0)} />
            <Icon Svg={EyeIcon} />
        </HStack>
    );

    const type = <Text className={cls.type} text={article?.type.join(', ')} />;

    const onMoveArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}`);
    }, [article?.id, navigate]);

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks.find((block) => (
            block.type === ArticleBlockType.TEXT
        )) as ArticleTextBlock;

        return (
            <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <VStack gap="16">
                    <VStack gap="8">
                        <HStack align="center" gap="8">
                            {!!article?.user.avatar && (
                                <Avatar
                                    size={30}
                                    src={article?.user.avatar}
                                    alt={article?.user.username}
                                />
                            )}
                            <Text text={article?.user.username} />
                            <Text className={cls.date} text={article?.createdAt} />
                        </HStack>
                        <Text title={article?.title} />
                        {type}
                    </VStack>
                    <div className={cls.imgWrapper}>
                        <img src={article?.img} alt={article?.title} className={cls.img} />
                    </div>
                    <ArticleTextBlockComponent block={textBlock} className={cls.paragraph} />
                    <HStack align="center" justify="between" gap="16">
                        <Button
                            onClick={onMoveArticle}
                        >
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
            <VStack gap="16">
                <AppLink target={target} to={`${RoutePath.article_details}${article?.id}`} className={cls.link} />
                <img src={article?.img} alt={article?.title} className={cls.img} />
                <VStack gap="8">
                    <HStack gap="8" justify="between">
                        {type}
                        {views}
                    </HStack>
                    <Text titleVariant="h3" title={article?.title} />
                    <Text className={cls.date} text={article?.createdAt} />
                </VStack>
            </VStack>
        </Card>
    );
});

export { ArticlesListItem };
