import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {ArticleDetailsCommentsSchema} from '../../model/types/articleDetails';
import {IComment} from 'entities/Comment';
import {fetchComments} from '../services/fetchComments';

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


export const articleDetailsSlice = createSlice({
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
            });
    }
});

export const { actions: articleDetailsCommentsActions } = articleDetailsSlice;

export const { reducer: articleDetailsCommentsReducer } = articleDetailsSlice;
