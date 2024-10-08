import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {


    const [contador, setContador] = useState(0)
    const incremetarPadre = useCallback((val)=>{
        setContador(cont => cont + val)
    },[])


    

    return (
        <>
            <h1>Contador: {contador}</h1>
            <Incrementar
                incrementar={incremetarPadre}
            />

        </>
    )
}
