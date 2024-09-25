import { useState } from "react";
export const ContadorApp = ({ value }) => {
    const [contador, setContador] = useState(value)
    const onIncrement = () => setContador(contador + 1)
    const onDecrement = () => setContador(contador - 1)
    const onReset = () => setContador(value)
    return (
        <>
            <h1>{contador}</h1>
            <button onClick={onIncrement} >+1</button>
            <button onClick={onDecrement}>-1</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}