
import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"
export const FormularioComponent = () => {

    const focusRef = useRef();
    const initalForm = {
        userName: '',
        email: '',
        password: ''
    }
    const { userName, email, password, onInputChange } = useForm(initalForm)
    // const {userName,email,password}=formState
    // const [formstate, setFormstate] = useState({
    //     userName: '',
    //     email: '',
    //     password: ''
    // })
    // const { userName, email, password } = formstate
    // const oninputChange = ({ target }) => {
    //     const { name, value } = target
    //     setFormstate({ ...formState, [name]: value })
    // }
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(userName, email, password);
    }
    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label
                    htmlFor="userName"
                    className="form-label"
                >
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="User name"
                    value={userName}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label
                  
                    htmlFor="email"
                    className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={onInputChange}
                    ref={focusRef}

                />
                <div name="emailHelp"
                    className="form-text">Well never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label
                    htmlFor="password"
                    className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" name="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    )
}


