import { useState } from "react"

export const AddTask = ({ agregar }) => {

    const [inputValue, setInputValue] = useState(" ")
    const onIputChange = ({ target }) => {
        setInputValue(target.value)
    }
    // del padre
    // const onSubmit = (event) => {
    //     event.preventDefault()
    //     const envio =
    //     {
    //         nombre: inputValue,
    //         visto: false
    //     }
    //     agregar(task => [...task, envio])
    // }
    const onSubmit = (event) => {
        event.preventDefault()
        agregar(inputValue)
        setInputValue("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Ingresar tarea" value={inputValue} onChange={onIputChange} />
        </form>
    )
}
