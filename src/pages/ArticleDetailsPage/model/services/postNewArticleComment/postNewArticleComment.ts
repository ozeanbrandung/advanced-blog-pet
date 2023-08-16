import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {IComment} from 'entities/Comment';
import {fetchComments} from '../fetchComments/fetchComments';
//вынести в публичное api?
//нет - это плохая идея - экшены ни селекторы по хорошему входиьть не должены
//import {addCommentActions} from 'features/AddCommentForm/model/slice/addCommentSlice';
import {getUserAuthDataSelector} from 'entities/User';
import {getArticleData} from 'entities/Article';

export const postNewArticleComment =
    createAsyncThunk<IComment, {textValue: string}, ThunkConfig<string>>(
        'articleDetails/addNewComment',
        async ({textValue}, thunkAPI) => {
            try {

                const userData = getUserAuthDataSelector(thunkAPI.getState());
                //const articleData = thunkAPI.getState().article;
                const articleData = getArticleData(thunkAPI.getState());

                if (!userData || !articleData || !textValue) {
                    return thunkAPI.rejectWithValue('Error');
                }

                const response = await thunkAPI.extra.api.post<IComment>(
                    '/comments', {
                        userId: userData.id,
                        id: new Date(),
                        articleId: articleData.id,
                        text: textValue,
                    });

                if (!response.data) {
                    throw new Error();
                }

                //для обновления интерфейса есть два решения - либо заново запрашиваем комментарии,
                // либо в стейт записываем или добавляем респонз
                thunkAPI.dispatch(fetchComments({id: articleData.id}));
                //очистку тоже отсюда убираем и переносим туда откуда вызывается этот thunk
                //thunkAPI.dispatch(addCommentActions.clearForm());

                return response.data;
            } catch (e) {
                return thunkAPI.rejectWithValue((e as Error).message);
            }
        }
    );
