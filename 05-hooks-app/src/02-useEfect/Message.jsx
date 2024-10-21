import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });



    useEffect(() => {
        console.log('Componente montado');
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove);


        return () => {

            window.removeEventListener('mousemove', onMouseMove);

            console.log('Componente desmontado');
        }
    }, [])


    return (
        <>
        {JSON.stringify(coords)}	
            <h3>Usuario ya existe </h3>
        </>
    )
}
