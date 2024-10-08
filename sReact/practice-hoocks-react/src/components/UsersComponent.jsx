import { useFetch } from "../hooks/userFetch"
export const UsersComponent = () => {

    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <>
            <h1>Lista de  usuarios</h1>
            {isLoading
                ? <h4>
                    Cargando....
                </h4>
                : errors ?
                    <h4>
                        errr:{errors}
                    </h4>
                    : 
                    <table className="table table-dark"  >
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">webSites</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(({id,name,email,website}) => 
                              
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{website}</td>
                                </tr>
                               
                            )}
                        </tbody>
                    </table>
            }

        </>
    )
}

