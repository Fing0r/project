import {useState} from "react";
import classes from "./Counter.module.scss"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button
                onClick={() => setCounter(counter + 1)}
                className={classes.btn}
            >
                Нажми
            </button>
        </div>
    );
};

export {Counter};
