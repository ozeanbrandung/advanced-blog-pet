import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {ArticleDetailsCommentsSchema} from '../types/articleDetailsComments';
import {IComment} from 'entities/Comment';
import {fetchComments} from '../services/fetchComments/fetchComments';
import {postNewArticleComment} from '../../model/services/postNewArticleComment/postNewArticleComment';

export const commentsAdapter = createEntityAdapter<IComment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment) => comment.id,
    // Keep the "all IDs" array sorted based on book titles
    //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

// const initialState: ArticleDetailsCommentsSchema = {
//     data: [],
//     isLoading: false,
//     error: ''
// };


export const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsSchema',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        ids: [],
        error: '',
        isLoading: false,
        entities: {},
    }),
    reducers: {
        //setComments: (state, action:PayloadAction<IComment[]>) => {
        //state.data = action.payload;
        //commentsAdapter.setAll(state, action.payload);
        //},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false;
                //state.data = action.payload;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(postNewArticleComment.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(postNewArticleComment.fulfilled, (state) => {
                state.isLoading = false;
                //state.data = action.payload;
                //commentsAdapter.setAll(state, action.payload);
            })
            .addCase(postNewArticleComment.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
