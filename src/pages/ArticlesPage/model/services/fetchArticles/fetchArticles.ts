import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {ArticleTypes, IArticle} from 'entities/Article';
import {getArticlesCurrentPage, getArticlesLimit} from '../../selectors/articlesSelectors';
//TODO: тоже нарушение архитектуры?
import {
    getArticleType,
    getOrderValue,
    getSearchValue,
    getSortValue
} from 'features/ArticleFilters/model/selectors/articleFiltersSelectors';
import {addQueryParams} from 'shared/lib/url/addQueryParams';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FetchArticlesListProps {
     //pageToLoad?: number
    replace?: boolean
}

export const fetchArticles =
    createAsyncThunk<IArticle[], FetchArticlesListProps, ThunkConfig<string>>(
        'articlesPage/fetchArticles',
        async (/*args*/_, thunkAPI) => {
            const {extra, rejectWithValue, getState} = thunkAPI;
            //const {pageToLoad = 1} = args;
            const limit = getArticlesLimit(getState());
            const pageToLoad = getArticlesCurrentPage(getState());
            const search = getSearchValue(getState());
            const sort = getSortValue(getState());
            const order = getOrderValue(getState());
            const type = getArticleType(getState());

            try {
                //window.history.pushState(null, '', `?search=${search}`)
                //еще можно то же самое сделать средствами react-router-dom
                addQueryParams({
                    sort, order, search, type
                });
                const response = await extra.api.get<IArticle[]>(
                    '/articles', {
                        params: {
                            _expand: 'user',
                            //how many pages will be loaded new time
                            _limit: limit,
                            //next page
                            _page: pageToLoad,
                            _sort: sort,
                            _order: order,
                            q: search,
                            type: type === ArticleTypes.ALL ? undefined : type,
                        }
                    });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue((e as Error).message);
            }
        }
    );
