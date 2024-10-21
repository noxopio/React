import { useEffect, useState } from "react"
import { Message } from "./Message";
export const SimpleForm = () => {
    const [formState, setFormState] = useState(
        {
            userName: 'Neo',
            email: 'ne0@gmail.com'
        }
    )
    const { userName, email } = formState;

    const handleInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('FormState');

    }, [formState]);
    useEffect(() => {
        console.log('State');

    }, []);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control mb-2"
                name="userName"
                placeholder="userName"
                value={userName}
                onChange={handleInputChange}
                />
                {
                    (userName==='Neo2')&&<Message />
                }

            <input
                type="email"
                className="form-control mt-2"
                name="email"
                placeholder="email@email.com"
                value={email}
                onChange={handleInputChange}
            />
        </>
    )
}
