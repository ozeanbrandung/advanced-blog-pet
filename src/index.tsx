import fn from './text';
import {render} from "react-dom";
import Counter from "./componets/Counter";

//fn(5);

document.body.style.backgroundColor = 'salmon';

render(<div><Counter/></div>, document.getElementById('root'))
