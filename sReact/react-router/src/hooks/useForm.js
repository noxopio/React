import { useState } from "react"


export const useForm = (initalForm = {}) => {


    const [formState, setFormstate] = useState(initalForm)
    // const { userName, email, password } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormstate({ ...formState, [name]: value })
    }

    return {
        ...formState,
        formState,
        onInputChange
    }
}
