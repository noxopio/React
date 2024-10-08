import { useForm } from "../hooks/useForm"

const initilState = [{
    id: new Date().getTime(),
    tarea: 'Explicar React',
    finalizada: false
}]

const nuevatarea = {
    id: 2,
    tarea: 'Explicar React',
    finalizada: false
}

// const addtarea = {
//     type: '[TAREAS]agregar tarea',
//     payload: nuevatarea
// }
const deltarea = {
    type: '[TAREAS]eliminar tarea',
    payload: nuevatarea
}

const tareasReducer = (state = initilState, action = {}) => {
    // if(action.type === '[TAREAS]agregar tarea'){
    //    return [...state, action.payload]
    // }

    switch (action.type) {
        case '[TAREAS]agregar tarea':
            return [...state, action.payload]

        case '[TAREAS]eliminar tarea':
            return state.filter(tarea => tarea.id !== action.payload.id)
        default:
            return state;
    }
}


// console.log(tareasReducer(initilState, addtarea));
// tareasReducer(initilState, addtarea)
export const ListTask = () => {


    const addtarea = (event) => {
        event.preventDefautl()
        // type: '[TAREAS]agregar tarea',
        //     payload: nuevatarea

    }

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })
    return (
        <>
            <form onSubmit={addtarea}  >
                <div className="form-group">
                    <input
                        type="text"
                        name="tarea"
                        className="form-control"
                        placeholder="Ingresa tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button
                    type="subtmit"
                    className="btn btn-primary">
                    Submit
                </button>
            </form>
            <hr />
            <ul>
                {initilState.map(({id,tarea}) =><li key={id}>{tarea}{id}</li> )}

            </ul>
        </>
    )
}