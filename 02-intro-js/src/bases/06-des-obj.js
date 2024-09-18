

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

// const {nombre, edad, clave }= persona
// console.log(nombre)
// console.log(edad)
// console.log(clave)

// console.log(persona.clave);


const retornaPersona = ({ nombre, edad, clave, rango = 'capitan' }) => {
    return {
        nombreClave: nombre,
        anios: edad,
        latlng:
        {
            lat: 13.334,
            ing: -12.35

        }
    }
}
const {nombreClave,anios,latlng:{lat,lng}}= retornaPersona(persona)


console.log(nombreClave, anios);
console.log(lat,
    lng);
