import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchArticles} from '../services/fetchArticles/fetchArticles';
import {ArticlesViewMode, IArticle} from 'entities/Article';
import {LOCAL_STORAGE_VIEW_MODE_KEY} from 'shared/consts/localStorage';
import {ArticlesPageSchema} from '../../model/types/articlesPage';

export const articlesAdapter = createEntityAdapter<IArticle>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article) => article.id,
});

export const articlesSlice = createSlice({
    name: 'articlesSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        error: '',
        isLoading: false,
        entities: {},
        viewMode: ArticlesViewMode.GRID
    }),
    reducers: {
        setViewMode: (state, action:PayloadAction<ArticlesViewMode>) => {
            state.viewMode = action.payload;
            localStorage.setItem(LOCAL_STORAGE_VIEW_MODE_KEY, action.payload);
        },
        initializeViewMode: (state) => {
            state.viewMode = 
                localStorage.getItem(LOCAL_STORAGE_VIEW_MODE_KEY) as ArticlesViewMode
                || ArticlesViewMode.GRID;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;
                //state.data = action.payload;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articlesActions } = articlesSlice;

export const { reducer: articlesReducer } = articlesSlice;
