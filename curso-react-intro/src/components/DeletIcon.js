import { TodoIcon } from "./TodoIcon"

export const DeletIcon = ({onDeleted}) => {
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={onDeleted}

    />
  )
}
