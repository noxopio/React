import { useForm } from "../../hooks/useForm"

export const LoginScreen = () => {

    const initialForm = {
        nombre: '',
        tecnologias: '' ,
        email: '',
        redes: ''
    }
    const { formState, nombre, tecnologias, email, redes, onInputChange } = useForm(initialForm)

const onSubmit=(e)=>{
e.preventDefault()
console.log(formState);

}

    return (
        <>
            <form className="container" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="tecnologias">Tecnologias</label>
                    <input
                        type="text"
                        className="form-control"
                        name="tecnologias"
                        value={tecnologias}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="">Redes</label>
                    <input
                        type="text"
                        className="form-control"
                        name="redes"
                        value={redes}
                        onChange={onInputChange}
                    />
                </div>
                <button className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
}
