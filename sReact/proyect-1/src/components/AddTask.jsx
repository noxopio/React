import { useState } from "react"

export const AddTask = ({ agregar }) => {

    const [inputValue, setInputValue] = useState(" ")
    const onIputChange = ({ target }) => {
        setInputValue(target.value)
        console.log(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const envio =
        {
            nombre: inputValue,
            visto: false
        }
        agregar(task => [...task, envio])
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Ingresar tarea" value={inputValue} onChange={onIputChange} />
        </form>
    )
}
