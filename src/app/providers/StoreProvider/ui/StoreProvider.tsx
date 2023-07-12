import {FC, ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from '../config/store';
import {StateSchema} from '../config/types';
import {ReducersMapObject} from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    //initial state понадобится для тестов вручную прокидывать
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState, asyncReducers } = props;

    //const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        //TODO: а вот этого не стоило передавать иначе стор будет создаваться
        //при каждой смене страницы
        //navigate
    );

    return (
        <Provider store={store} >
            {children}
        </Provider>
    );
};
