import { Message } from "./Message";
import { useForm } from "../hooks/useForm";



export const FormWithCustomHook = () => {

    const { formState, onInputChange ,userName, email, password,onResetForm } = useForm(
        {
            userName: '',
            email: '',
            password: ''
        },


    );



    // const [formState, setFormState] = useState(
    //     {
    //         userName: 'Neo',
    //         email: 'ne0@gmail.com',
    //         password: '123456'
    //     },
    // )
    // const { userName, email, password,onResetForm } = formState;



    // useEffect(() => {
    //     console.log('FormState');

    // }, [formState]);
    // useEffect(() => {
    //     console.log('State');

    // }, []);





    return (
        <>
            <h1>Formulario con custom HookSimple</h1>
            <hr />

            <input
                type="text"
                className="form-control mb-2"
                name="userName"
                placeholder="userName"
                value={userName}
                onChange={onInputChange}
            />
            {
                (userName === 'Neo2') && <Message />
            }

            <input
                type="email"
                className="form-control mt-2"
                name="email"
                placeholder="email@email.com"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                name="password"
                placeholder="password"
                value={password}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >Borrar</button>
        </>
    )
}
