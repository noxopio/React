/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo, useState } from "react";
export const CalculosPesados = () => {
    const [list, setList] = useState([2, 3, 4, 5, 6, 8, 9, 10, 11])
    const [show, setShow] = useState(true)

    const getCalculo =(list) => useMemo( () => {
        console.log('calculando');
        return list.reduce((acc, el) => acc * el)
    },[list]);
    

    const addNum=()=>{

        setList([...list,list[list.length-1]+1])
    }

    return (
        <>
            <h1>Calculo</h1>
            <p>{getCalculo(list)}</p>


            <button className="btn btn-primary" onClick={()=>setShow (!show)}>{show ? 'SHOW' : 'HIDE'}</button>
        <button className="btn btn-primary" onClick={()=>addNum()}  > Agregar</button>
        </>
    )
}
