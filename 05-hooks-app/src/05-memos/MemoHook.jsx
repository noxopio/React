import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyProcess = (iterations = 100) => {

    for (let i = 0; i < iterations; i++) {
        console.log('Ahi vamos...')
    }
    return `${iterations} iteraciones realizadas`;
}




export const MemoHook = () => {

    const memorizedValue = useMemo(() => heavyProcess(counter), [counter])
    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)



    return (
        <>

            <h1>Counter: <small >{counter}</small></h1>
            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>
            <button

                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}

            >
                {JSON.stringify(show)}
            </button>

        </>
    )
}
