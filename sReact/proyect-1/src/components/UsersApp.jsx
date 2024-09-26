import { useEffect, useState } from "react"

export const UsersApp = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await resp.json()
            setUsers(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => { fetchUsers()}, [])
    return (
        <>
            <h1>
                listado de usuarios
            </h1>
            <ul>
                {users.map(({id,name})=><li  key={id}>{id}.{name}</li>    )                          }
              
            </ul>
        </>
    )
}
