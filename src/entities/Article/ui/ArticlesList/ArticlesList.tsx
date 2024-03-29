import {
    HTMLAttributeAnchorTarget,
    memo,
    useRef,
    // useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

// import { getPageScrollByPath } from '@/widgets/Page/model/selectors/page';
// import { useSelector } from 'react-redux';
// import { StateSchema } from '@/app/providers/StoreProvider';
// import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';

import cls from './ArticlesList.module.scss';
import { ListContainer, VirtuosoContext } from './VirtuosoContainer';

import { PAGE_ID } from '@/shared/const';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.GRID ? 9 : 3)
        .fill(0)
        .map((_, index) => (
            <ArticlesListItemSkeleton key={index} view={view} />
        ));

const virtuosoComponents = {
    List: ListContainer,
};

interface ArticlesListProps {
    className?: string;
    articles?: Article[];
    view?: ArticleView;
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    isVirtualize?: boolean;
}

const ArticlesList = memo((props: ArticlesListProps) => {
    const {
        className,
        articles,
        view = ArticleView.GRID,
        isLoading,
        target,
        isVirtualize,
    } = props;
    const { t } = useTranslation('articles');
    const { pathname } = useLocation();
    // const scrollPosition = useSelector((state: StateSchema) => getPageScrollByPath(state, pathname));
    const ref = useRef<VirtuosoGridHandle>(null);
    // const [mounted, setMounted] = useState(false);

    const renderVirtualizeArticle = (index: number, article: Article) => (
        <ArticlesListItem
            target={target}
            article={article}
            key={article.id}
            view={view}
        />
    );

    const renderArticle = (article: Article) => (
        <ArticlesListItem
            target={target}
            article={article}
            key={article.id}
            view={view}
        />
    );
    // TODO убрать, вызывает ререндеры
    // useInitialEffect(() => {
    //     if (mounted && ref?.current) {
    //         ref.current.scrollTo({ top: scrollPosition - 198 });
    //         return;
    //     }
    //
    //     setMounted(true);
    // }, [mounted]);

    const context = {
        className: cls[view],
        isLoading: isLoading || false,
        view,
    };

    if (!isLoading && !articles?.length) {
        return <Text title={t('Статей нет')} />;
    }

    return isVirtualize ? (
        <VirtuosoGrid<Article, VirtuosoContext>
            ref={ref}
            customScrollParent={document.getElementById(PAGE_ID) as HTMLElement}
            components={virtuosoComponents}
            data={articles}
            context={context}
            computeItemKey={(key) => `item-${key}`}
            overscan={200}
            itemContent={renderVirtualizeArticle}
        />
    ) : (
        <div
            data-testid="ArticlesList"
            className={classNames(cls[view], {}, [className])}
        >
            {articles?.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export { ArticlesList };
