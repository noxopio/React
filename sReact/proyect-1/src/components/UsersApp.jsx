import { useEffect, useState } from "react"
import { UserList } from "./UserList";
export const UsersApp = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await resp.json()
            setUsers(data)
        } catch (error) {
            console.log('error',error);
        }
    }
const [endpoint, setEndpoint] = useState('users')


    // useEffect(() => { fetchUsers()}, [])
const handleFecth = () => {
// fetchUsers()
setEndpoint('comments')	

}

    return (
        <>
            <h1>
                listado de usuarios
            </h1>
            <UserList endPoint={endpoint} />
<button onClick={handleFecth} >Listar usuarios</button>
        </>
    )
}
