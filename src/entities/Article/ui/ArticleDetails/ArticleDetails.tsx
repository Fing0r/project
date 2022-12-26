import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import cls from './ArticleDetails.module.scss';

import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList, useDynamicModule } from '@/shared/lib/hooks/useDynamicModule';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import {
    Text, TextAlign, TextSize, TextTheme,
} from '@/shared/ui/Text';

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
    useDynamicModule(initialReducers, false);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const article = useSelector(getArticleDetailData);
    const error = useSelector(getArticleDetailError);
    const isLoading = useSelector(getArticleDetailIsLoading);

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
