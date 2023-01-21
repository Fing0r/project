import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailPageSchema {
    recommendations: ArticleDetailsRecommendationsSchema;
    comments: ArticleDetailsCommentsSchema;
}
