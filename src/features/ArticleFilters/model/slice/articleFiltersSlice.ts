import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IArticleFiltersSchema, Order, Sort} from '../types/articleFiltersTypes';

const initialState: IArticleFiltersSchema = {
    search: undefined,
    order: undefined,
    sort: undefined,
};

export const articleFiltersSlice = createSlice({
    name: 'articleFiltersSlice',
    initialState,
    reducers: {
        setOrder: (state, action:PayloadAction<Order>) => {
            state.order = action.payload;
        },

        setSearch: (state, action:PayloadAction<string>) => {
            state.search = action.payload;
        },

        setSort: (state, action: PayloadAction<Sort>) => {
            state.sort = action.payload;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginThunk.pending, (state) => {
    //             state.error = null;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginThunk.fulfilled, (state) => {
    //             state.isLoading = false;
    //             //const dispatch = useDispatch();
    //             //dispatch(userActions.setAuthData(action.payload));
    //             //в качестве токена просто установим объект юзеоа с бд
    //         })
    //         .addCase(loginThunk.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload || null;
    //         });
    // }
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { actions: articleFiltersActions } = articleFiltersSlice;

//export default counterSlice.reducer;
export const { reducer: articleFiltersReducer } = articleFiltersSlice;
