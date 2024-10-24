import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const {counter,increment}=useCounter();



    return (
        <>
            <h1>Counter: <Small>{counter}</Small></h1>
            <button
                className="btn btn-primary"
                onClick={()=>increment()}
            >
                +1
            </button>

        </>
    )
}
