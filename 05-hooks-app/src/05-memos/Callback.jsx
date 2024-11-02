import { useState } from "react"

export const Callback = () => {


    const [counter, setCounter] = useState(10)

    return (


        <>

            <h1>Use callback Hook : {counter} </h1>

            <hr />

        </>

    )
}
