import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(55);
    return (
        <>
            <h1>Counter with custom hook :{counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
            <button className="btn btn-danger" onClick={reset}  >Reset </button>
            <button className="btn btn-primary" onClick={()=>decrement(1)}>-1</button>
        </>
    )
}
