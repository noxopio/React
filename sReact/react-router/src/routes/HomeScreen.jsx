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
          <th scope="col"  > E-mail</th>
          <th scope="col"  > Redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" >{user.nombre}</th>
          <td>{user.tecnologias[0]}</td>
          <td>{user.mail}</td>
          <td>{user.redes}</td>
        </tr>
      </tbody>
    </table>
  )
}
