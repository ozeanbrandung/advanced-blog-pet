import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';


const App = () => {
    // const {theme} = useTheme();
    //
    // useEffect(() => {
    //     document.documentElement.dataset.theme = theme;
    // }, [theme]);

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
