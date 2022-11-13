import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { ReducersList, useDynamicModule } from 'shared/lib/hooks/useDynamicModule';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

const initialReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

interface ArticleDetailProps {
    className?: string;
    id: string;
}

const ArticleDetails = memo((props: ArticleDetailProps) => {
    const {
        className,
        id,
    } = props;
    const dispatch = useAppDispatch();
    useDynamicModule(initialReducers, true);

    const navigate = useNavigate();

    const onBackArticles = useCallback(() => {
        navigate(`${RoutePath.articles}`);
    }, [navigate]);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const article = useSelector(getArticleDetailData);
    const error = useSelector(getArticleDetailError);
    const isLoading = useSelector(getArticleDetailIsLoading);

    const { t } = useTranslation();

    const renderArticleBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleDetail, {}, [cls.skeletonWrapper])}>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius="50%"
                />
                <Skeleton
                    className={cls.skeleton}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={232}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={232}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ArticleDetail, {}, [cls.center])}>
                <Text
                    align={TextAlign.CENTER}
                    title={error}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetail, {}, [className])}>
            <Button
                onClick={onBackArticles}
            >
                {t('Вернуться назад')}
            </Button>
            <div className={cls.articleHeader}>
                <Avatar
                    className={cls.avatar}
                    size={200}
                    src={article?.img}
                    alt={article?.title}
                />
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                    className={cls.title}
                />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} />
                    <Text text={article?.createdAt} />
                </div>
            </div>
            {article?.blocks.map(renderArticleBlock)}
        </div>
    );
});

export { ArticleDetails };
