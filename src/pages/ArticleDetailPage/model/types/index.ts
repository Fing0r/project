import {
    ArticleDetailsRecommendationsSchema,
} from './ArticleDetailsRecommendationsSchema';
import {
    ArticleDetailsCommentsSchema,
} from './ArticleDetailsCommentsSchema';

export interface ArticleDetailPageSchema {
    recommendations: ArticleDetailsRecommendationsSchema
    comments: ArticleDetailsCommentsSchema
}
