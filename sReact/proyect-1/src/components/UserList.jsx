/* eslint-disable no-unused-vars */
import { userFecthData } from "./hooks/userFecthData"

export const UserList = ({ endPoint }) => {

    const { data, isLoading } = userFecthData(endPoint)


    return (
        <>

            <ul>
                {endPoint == 'users' ? data.map(({ id, name }) => <li key={id}>{id}.{name}</li>)
                    : data.map(({ id, body }) => <li key={id}>{id}.{body}</li>)
                }

            </ul>



            {/* {data.map(({ id, name }) => <li key={id}>{id}.{name}</li>)} */}
        </>
    )
}
