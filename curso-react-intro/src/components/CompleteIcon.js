import { TodoIcon } from "./TodoIcon"

export const CompleteIcon = ({completed, onCompleted}) => {
  return (
    <TodoIcon 
    type="check"	
    color={completed ? "green" : "gray"}
    onClick={onCompleted}
    />
  )
}
