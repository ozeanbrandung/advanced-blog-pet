export {ArticleStateSchema, ArticlesViewMode, IArticle, ArticleTypes} from './model/types/article';
export {Article} from './ui/Article/Article';
export {ArticleSkeleton} from './ui/ArticleSkeleton/ArticleSkeleton';
//TODO: убрать это из api
export {articleActions, articleReducer} from './model/slice/articleSlice';
export {fetchArticle} from './model/services/fetchArticle';
export {getArticleData} from './model/selectors/articleSelectors';
export {ArticlesList} from './ui/ArticlesList/ArticlesList';
