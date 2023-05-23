import fn from './text';
import {render} from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

//fn(5);

document.body.style.backgroundColor = 'salmon';

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'))
