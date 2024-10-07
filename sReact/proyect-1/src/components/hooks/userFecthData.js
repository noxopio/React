/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"





export  const userFecthData = ({ endPoint }) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async () => {
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await resp.json();
            setData(data)
            setIsLoading(false)
        } catch (error) {
            console.error(error);
        }

    }


    useEffect(() => { fetchData() }, [endPoint])




    return (
        data, isLoading
    )
}

// export default userFecthData










































// const [data, setData] = useState([])
// const fetchdata = async () => {
//     try {
//         const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
//         const data = await resp.json()
//         setData(data)
//     } catch (error) {
//         console.log('error', error);
//     }
// }
// useEffect(() => { fetchdata() }, [endPoint])



// import { useState,useEffect } from "react"

// export const userFecthData = ({ endPoint }) => {


//     const [data, setData] = useState([])
//     const [isLoading, setisLoading] = useState([])
//     const fetchData = async () => {
//         try {
//             const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
//             const data = await resp.json();
//             setData(data)
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     useEffect(() => { fetchData() }, [endPoint])

//     return {
//         data,
//         isLoading,
//     }
// }












