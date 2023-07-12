import React, { Suspense, useEffect } from 'react';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { LOCAL_STORAGE_AUTH_KEY } from 'shared/consts/localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInitialized, userActions } from 'entities/User';


const App = () => {
    const dispatch = useDispatch();

    const initialized = useSelector(getUserInitialized);

    useEffect(() => {
        const token = localStorage.getItem(LOCAL_STORAGE_AUTH_KEY);
        //if (token) {
        dispatch(userActions.initAuthData(token ? JSON.parse(token) : undefined));
        //}
    }, [dispatch]);

    return (
        <div className='app'>
            {/* библиотека i18n требует обернуть компоненты в саспенс*/}
            <Suspense fallback=''>
                <Navbar />

                <main className='main'>
                    <Sidebar/>

                    {initialized && <AppRouter />}
                    
                </main>
                {/*<button onClick={toggleTheme}>toggle</button>*/}
            </Suspense>
        </div>
    );
};

export default App;
