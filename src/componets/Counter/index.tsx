import {useState} from "react";
import './index.scss';
import styles from './index.module.scss';

function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <h4>{count}</h4>
            <button className={styles.btn} onClick={increment}>add 1</button>
        </div>
    );
}

export default Counter;
