import '../styles/TodoCounter.css'
export const TodoCounter = ({ total, completed }) => {
  return (
    total === completed ? <h1 className="TodoCounter">Tareas completas</h1> :
      <h1 className="TodoCounter">Has completado <span>{completed}</span>  de <span>{total}</span> TODOs</h1>

  )
}


