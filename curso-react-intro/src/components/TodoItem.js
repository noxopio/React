import '../styles/TodoItem.css';
import { CompleteIcon } from './CompleteIcon'
import { DeletIcon } from './DeletIcon'
export const TodoItem = ({text,completed,onCompleted,onDeleted}) => {
    return (
      <li className="TodoItem">

        <CompleteIcon completed={completed} onCompleted={onCompleted} />
      {/* <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}
      onClick={onCompleted}
      >
      ✔
      </span> */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeletIcon onDeleted={onDeleted} 
      />
      {/* <span className="Icon Icon-delete"
      onClick={onDeleted}
      >

        ❌
      </span> */}
    </li>
  );
}
