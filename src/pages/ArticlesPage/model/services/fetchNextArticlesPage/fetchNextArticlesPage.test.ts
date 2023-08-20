import axios from 'axios';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk';
import {fetchArticles} from '../fetchArticles/fetchArticles';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
jest.mock('../fetchArticles/fetchArticles');

describe('fetchNextArticlesPage', () => {

    test('success', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: [] }));

        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                currentPage: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasArticlesToLoad: true,
            }
        });

        // @ts-ignore
        await thunk.callThunk();

        //pending, fulfilled, 2 dispatches inside action
        expect(thunk.dispatch).toBeCalledTimes(4);
        //currentPage = 2 => 2 + 1
        //expect(fetchArticles).toBeCalledWith({pageToLoad: 3});
        expect(fetchArticles).toBeCalledWith({});
    });

    test('not called when hasArticlesToLoad: false', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: [] }));

        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                currentPage: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasArticlesToLoad: false,
            }
        });

        // @ts-ignore
        await thunk.callThunk();

        //only pending and fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2);
        //currentPage = 2 => 2 + 1
        expect(fetchArticles).not.toHaveBeenCalled();
    });

    test('not called when isLoading: true,', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({ data: [] }));

        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                currentPage: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                hasArticlesToLoad: true,
            }
        });

        // @ts-ignore
        await thunk.callThunk();

        //only pending and fulfilled
        expect(thunk.dispatch).toBeCalledTimes(2);
        //currentPage = 2 => 2 + 1
        expect(fetchArticles).not.toHaveBeenCalled();
    });

    test('error', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({status: 403}));

        const thunk = new TestAsyncThunk(fetchNextArticlesPage);
        // @ts-ignore
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
    });

});

