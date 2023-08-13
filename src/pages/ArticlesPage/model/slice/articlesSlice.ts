import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchArticles} from '../services/fetchArticles/fetchArticles';
import {ArticlesViewMode, IArticle} from 'entities/Article';
import {LOCAL_STORAGE_VIEW_MODE_KEY} from 'shared/consts/localStorage';
import {ArticlesPageSchema} from '../../model/types/articlesPage';

export const articlesAdapter = createEntityAdapter<IArticle>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
});

const GRID_LIMIT = 9;
const LIST_LIMIT = 4;

export const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        error: '',
        isLoading: true,
        entities: {},
        viewMode: ArticlesViewMode.GRID,
        currentPage: 1,
        limit: GRID_LIMIT,
        hasArticlesToLoad: true,
        _inited: false,
    }),
    reducers: {
        setViewMode: (state, action:PayloadAction<ArticlesViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_MODE_KEY, action.payload);
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            //++state.currentPage - не можем мы это тут оставыить - иногда нужно сбрасываться на 1 страницу
            state.currentPage = action.payload;
        },
        initializeArticles: (state) => {
            state._inited = true;
            const view = localStorage.getItem(LOCAL_STORAGE_VIEW_MODE_KEY) as ArticlesViewMode
                || ArticlesViewMode.GRID;
            state.viewMode = view;


            //pagination
            state.limit = view === ArticlesViewMode.GRID ? GRID_LIMIT : LIST_LIMIT;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = '';
                state.isLoading = true;

                //TODO: без этого у нас не будет появляться скелетон при установке фильтров
                if (action.meta.arg.replace) {
                    //либо так
                    //articlesAdapter.setAll(state, []);
                    //либо вообще так
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                //state.data = action.payload;
                state.hasArticlesToLoad = action.payload.length === state.limit;
                state.isLoading = false;

                if (!action.meta.arg.replace) {
                    //TODO: ТУТ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ setAll иначе будет бесконечная загрузка - каждый раз при попытке подгрузить
                    // доп порцию данных - данные будут перезатираться
                    //articlesAdapter.setAll(state, action.payload);
                    articlesAdapter.addMany(state, action.payload);
                } else {
                    //TODO: а вот тут наоборот нам нужно при поиске и сортировке перезатирать данные и запрашивать все заново
                    articlesAdapter.setAll(state, action.payload);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articlesActions } = articlesSlice;

export const { reducer: articlesReducer } = articlesSlice;
