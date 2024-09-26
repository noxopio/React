import { useState } from "react"
import { AddTask } from "./components/AddTask"
const Items = ({ nombre, visto }) => {
    return (<li>{nombre}{visto ? '✅' : '❌'}</li>)
}
export const ListasApp = () => {
    const addTask = () => {
        setArreglo([...arreglo, { index: 3, nombre: 'Componentes', visto: false }])
    }
    let listadoSecciones = [
        { index: 1, nombre: 'Instalciones nescearias', visto: true },
        { index: 2, nombre: 'Uso de vite', visto: false },
    ]
    const [arreglo, setArreglo] = useState(listadoSecciones)

    const onAgregarTarea=(val)=>{
        console.log(val);
        
    }

    return (
        <>
            <AddTask agregar={onAgregarTarea}></AddTask>
            <h1>Listados </h1>
            <ol>{arreglo.map(({ visto, nombre, index }) => <Items key={index} nombre={nombre} visto={visto} />)}
            </ol>

            {/* <button onClick={addTask} >
                agregar            </button> */}
        </>
    )
}