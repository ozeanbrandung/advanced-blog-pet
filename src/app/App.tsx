import React, { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
        if (token) {
            dispatch(userActions.setAuthData(JSON.parse(token)));
        }
    }, [dispatch]);

    return (
        <div className='app'>
            {/* библиотека i18n требует обернуть компоненты в саспенс*/}
            <Suspense fallback=''>
                <Navbar />

                <main className='main'>
                    <Sidebar/>

                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </main>
                {/*<button onClick={toggleTheme}>toggle</button>*/}
            </Suspense>
        </div>
    );
};

export default App;
