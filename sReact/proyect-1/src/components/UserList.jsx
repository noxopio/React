import { useEffect, useState } from "react";


export const UserList = ({ endPoint }) => {

    const [data, setData] = useState([])
    const fetchdata = async () => {
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await resp.json()
            setData(data)
        } catch (error) {
            console.log('error', error);
        }
    }
    useEffect(() => { fetchdata() }, [endPoint])

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
