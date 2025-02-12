import '../styles/CreateTodoButton.css'
export const CreateTodoButton = () => {

  const logTest = () => {	console.log('Hola')}
  return (

    <button  className="CreateTodoButton"    onClick={logTest}>+</button>
  )
}
