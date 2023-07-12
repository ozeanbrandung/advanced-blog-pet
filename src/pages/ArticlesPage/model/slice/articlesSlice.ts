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
        hasArticlesToLoad: true,
    }),
    reducers: {
        setViewMode: (state, action:PayloadAction<ArticlesViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_MODE_KEY, action.payload);
        },
        setCurrentPage: (state) => {
            ++state.currentPage;
        },
        initializeArticles: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_VIEW_MODE_KEY) as ArticlesViewMode
                || ArticlesViewMode.GRID;
            state.viewMode = view;


            //pagination
            state.limit = view === ArticlesViewMode.GRID ? GRID_LIMIT : LIST_LIMIT;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                //state.data = action.payload;
                //TODO: ТУТ НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ setAll иначе будет бесконечная загрузка
                //articlesAdapter.setAll(state, action.payload);
                articlesAdapter.addMany(state, action.payload);
                state.hasArticlesToLoad = action.payload.length === state.limit;
                state.isLoading = false;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articlesActions } = articlesSlice;

export const { reducer: articlesReducer } = articlesSlice;
