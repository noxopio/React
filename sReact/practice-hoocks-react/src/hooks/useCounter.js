import { useState } from "react"

export const useCounter = (value = 0) => {

    const [contador, setContador] = useState(value)
    const incrementar = (valor = 1) => setContador(contador + valor)
    const decrementar = (valor = 1, negativo) => {
        if (!negativo && contador - valor < 0) {
            setContador(0)
            return
        }
        setContador(contador - valor)
    }
    const resetear = () => setContador(0)

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
