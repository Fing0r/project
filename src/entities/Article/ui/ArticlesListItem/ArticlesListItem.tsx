import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Card } from 'shared/ui/Card/Card';
import { Button } from 'shared/ui/Button/Button';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlesListItem.module.scss';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';

interface ArticlesListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;
}

const ArticlesListItem = memo((props: ArticlesListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.GRID,
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();

    const views = (
        <div className={cls.views}>
            <Text text={String(article?.views || 0)} />
            <Icon Svg={EyeIcon} />
        </div>
    );
    const type = <Text className={cls.type} text={article?.type.join(', ')} />;

    const onMoveArticle = useCallback(() => {
        navigate(`${RoutePath.article_detail}${article?.id}`);
    }, [article?.id, navigate]);

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks.find((block) => (
            block.type === ArticleBlockType.TEXT
        )) as ArticleTextBlock;

        return (
            <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    {!!article?.user.avatar && (
                        <Avatar
                            className={cls.avatar}
                            size={30}
                            src={article?.user.avatar}
                            alt={article?.user.username}
                        />
                    )}
                    <Text text={article?.user.username} />
                    <Text className={cls.date} text={article?.createdAt} />
                </div>
                <Text className={cls.title} title={article?.title} />
                {type}
                <div className={cls.imgWrapper}>
                    <img src={article?.img} alt={article?.title} className={cls.img} />
                </div>
                <ArticleTextBlockComponent block={textBlock} className={cls.paragraph} />
                <div className={cls.footer}>
                    <Button
                        onClick={onMoveArticle}
                    >
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
            <AppLink to={`${RoutePath.article_detail}${article?.id}`} className={cls.link} />
            <img src={article?.img} alt={article?.title} className={cls.img} />
            <div className={cls.infoHeader}>
                {type}
                {views}
            </div>
            <Text className={cls.title} title={article?.title} />
            <Text className={cls.date} text={article?.createdAt} />
        </Card>
    );
});

export { ArticlesListItem };
