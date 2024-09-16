// // variables are declared with let and const
// const name = 'John';
// let age = 25;
// const lastName = 'Doe';

// const person = `My name is ${name} ${lastName} and I am ${age} years old.`;


// console.log(person);

// function greet(name) {
//     return
//     console.log('Hello, World!'+name);
// }   
// console.log(`Hello, ${ greet(name)}!`);


// 
const persona = {

    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
        ciudad: 'Bogota',
        zip: 111111,
        lat: 14.3232,
        lng: 34.923332
    }
}
const persona2 = {...persona};
persona2.nombre = 'Carlos';
console.log(persona2.nombre);
console.log(persona.nombre);