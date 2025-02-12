import { ReactComponent as CheckSVG } from '../assets/check.svg';
import { ReactComponent as DeletSVG } from '../assets/delete.svg';
import '../styles/TodoIcon.css';
const iconTypes = {
  "check": (color) => <CheckSVG className='Icon-svg' fill={color} />,
  "delete": (color) => <DeletSVG className='Icon-svg' fill={color} />
}

export const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
      className={`Icon-container  Icon-container-${type}`}
      onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  )
}