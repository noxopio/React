/* eslint-disable react/prop-types */
import { useState } from "react"
import { UserContex } from "./UserContex"

// const user={
// nombre: "nox",
// tecnologias: "React",
// email: "mail@mail.com",
// redes: '@nox_opio'

// }
export const UserPovider = ({ children }) => {
    
const [user, setUser] = useState({})

    
    return (


        <UserContex.Provider value={{user,setUser}}>

            {children}
        </UserContex.Provider>
    )
}
