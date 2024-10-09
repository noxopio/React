/* eslint-disable react/prop-types */
import { UserContex } from "./UserContex"

const user={
nombre: "nox",
tecnologias: "React",
email: "mail@mail.com",
redes: '@nox_opio'

}
export const UserPovider = ({ children }) => {
    return (

        <UserContex.Provider value={{user}}>

            {children}
        </UserContex.Provider>
    )
}
