import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (args: Arg) =>  AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    //actionCreator - собственно сам thunk
    constructor(actionCreator:  ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(args: Arg) {
        //thunk - это action creator который возвращает асинхронный action, так что получим его
        const action = this.actionCreator(args);
        //узнаем из типов что этот action в себя принимает и передаем это
        const result = await action(this.dispatch, this.getState, undefined);
        return result;
    }
}
