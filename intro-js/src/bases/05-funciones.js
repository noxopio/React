

// const  saludar= function (nombre) {
//   return `Hola, soy ${this.name} ${this.apellido}`;
// }
const saludar2 = (name) => {
    return `Hola  soy ${name} `;
}
const saludar3 = (name) => `Hola  soy ${name} `;



// console.log(saludar);
console.log(saludar3('vegeta'));


const getUser = () => ({
    uid: 'ABCD!@#',
    username: 'El_user'
});

const user = getUser();
console.log(user);

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABc567',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('User');
console.log('userActivo', usuarioActivo);


const getUSerActivo1 = (nombre) => ({
    uid: 'CGSA34',
    username: nombre
})

const activo1 = getUSerActivo1('dante');

console.log('arrow',activo1)