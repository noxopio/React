import { useContext } from "react"
import { UserContex } from "./context/UserContex"

export const HomeScreen = () => {
const {user}=useContext(UserContex)




  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"  > Nombre</th>
          <th scope="col"  >Tecnologias </th>
          <th scope="col"  > Email</th>
          <th scope="col"  > Redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" >{user.nombre}</th>
          <td>{user.tecnologias}</td>
          <td>{user.email}</td>
          <td>{user.redes}</td>
        </tr>
      </tbody>
    </table>
  )
}
