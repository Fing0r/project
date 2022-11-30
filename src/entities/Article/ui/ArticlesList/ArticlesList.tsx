import {
    HTMLAttributeAnchorTarget,
    memo,
    // MutableRefObject,
    // useCallback,
    // useEffect,
    // useRef,
    // useState,
} from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
// import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
// import { fetchNextArticles } from 'pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
// import { useSelector } from 'react-redux';
// import { getPageScrollByPath } from 'widgets/Page/model/selectors/page';
// import { useLocation } from 'react-router-dom';
// import { StateSchema } from 'app/providers/StoreProvider';
// import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
// import { ListContainer, VirtuosoContext } from './VirtuosoContainer';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticlesListItemSkeleton
            key={index}
            view={view}
        />
    ));

// const virtuosoComponents = {
//     List: ListContainer,
// };

interface ArticlesListProps {
    className?: string;
    articles?: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    // wrapperRef?: MutableRefObject<HTMLDivElement>
}

const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
        target,
        // wrapperRef,
    } = props;
    const { t } = useTranslation('articles');
    // const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));
    // const dispatch = useAppDispatch();
    // const ref = useRef<VirtuosoGridHandle>(null);
    // const [mounted, setMounted] = useState(false);
    // const { pathname } = useLocation();

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            target={target}
            article={article}
            key={article.id}
            view={view}
        />
    );

    // useInitialEffect(() => {
    //     if (mounted && ref?.current) {
    //         ref.current.scrollTo({ top: scrollPosition - 198 });
    //         return;
    //     }
    //
    //     setMounted(true);
    // }, [mounted]);
    // const onLoadNextArticles = useCallback(() => {
    //     dispatch(fetchNextArticles());
    // }, [dispatch]);
    //
    // const context = {
    //     className: cls[view],
    //     isLoading: isLoading || false,
    //     view,
    // };
    return (
        <div className={classNames(cls[view], {}, [className])}>
            {articles?.length
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
            {/* <VirtuosoGrid<Article, VirtuosoContext> */}
            {/*    ref={ref} */}
            {/*    customScrollParent={wrapperRef?.current} */}
            {/*    components={virtuosoComponents} */}
            {/*    data={articles} */}
            {/*    context={context} */}
            {/*    computeItemKey={(key) => `item-${key}`} */}
            {/*    overscan={200} */}
            {/*    endReached={onLoadNextArticles} */}
            {/*    itemContent={renderArticle} */}
            {/* /> */}
            {!isLoading && !articles?.length && <Text title={t('Статей нет')} />}
        </div>
    );
});

export { ArticlesList };
