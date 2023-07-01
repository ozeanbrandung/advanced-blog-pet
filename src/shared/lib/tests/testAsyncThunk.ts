import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (args: Arg) =>  AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    //actionCreator - собственно сам thunk
    constructor(actionCreator:  ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(args: Arg) {
        //thunk - это action creator который возвращает асинхронный action, так что получим его
        const action = this.actionCreator(args);
        //узнаем из типов что этот action в себя принимает и передаем это
        const result = await action(this.dispatch, this.getState, {api: this.api, navigate: this.navigate});
        return result;
    }
}
