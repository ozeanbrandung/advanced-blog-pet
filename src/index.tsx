import {render} from 'react-dom';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
//сюда нужно подкючить интернализацию - чтобы работала на всем приложении
import 'shared/config/i18n/i18n';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
//а компоненты каорые используют эту библиотеку нужно оберуть в suspense
//это можно сделать глобально в апп

//document.body.style.backgroundColor = 'salmon';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'));
