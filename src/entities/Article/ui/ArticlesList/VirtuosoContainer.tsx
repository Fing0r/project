import { forwardRef, HTMLProps } from 'react';
import { ArticleView } from '../../model/types/article';
import { ArticlesListItemSkeleton } from '../ArticlesListItem/ArticlesListItemSkeleton';

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticlesListItemSkeleton
            key={index}
            view={view}
        />
    ));

export interface VirtuosoContext {
    className: string;
    isLoading: boolean;
    view: ArticleView;
}

type ListProps = HTMLProps<HTMLDivElement> & { context?: VirtuosoContext }

const ListContainer = forwardRef<HTMLDivElement, ListProps>(({ children, style, ...otherProps }, ref) => {
    const {
        className = '',
        view = ArticleView.GRID,
        isLoading = false,
    } = otherProps.context ?? {};

    return (
        <div
            {...otherProps}
            ref={ref}
            className={className}
            style={{ ...style }}
        >
            {children}
            {(isLoading) && getSkeletons(view)}
        </div>
    );
});

export { ListContainer };
