import { useState } from 'react';
export const WheatherApp = () => {
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    // const dif =273.15
    const handleInputChange = ({ target }) => {
        setCiudad(target.value)
    }
    const fetchClinma = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=ed2c4805c5033b3e0b29b14822c5930f&units=metric`
            const resp = await fetch(url)
            const data = await resp.json()
            setDataClima(data)
            console.log(data)
        } catch (error) {
            console.error('ha ocurrido un error', error);
        }
    }
    const handleOnsubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClinma()
        console.log(ciudad.length);
    }
    return (
        <div className="container">
            <h1>Aplicación del clima</h1>
            <form onSubmit={handleOnsubmit} >
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <h2>Temperatura:{parseInt(dataClima.main.temp)}C</h2>
                        <p>Condición meteorológica {dataClima.weather[0].description} </p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} ></img>
                    </div>
                )
            }
        </div>
    )
}
