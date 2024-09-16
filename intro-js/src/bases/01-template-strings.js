// variables are declared with let and const
const name = 'John';
let age = 25;
const lastName = 'Doe';

const person = `My name is ${name} ${lastName} and I am ${age} years old.`;


console.log(person);

function greet(name) {
    return 'hola'+' '+ name;
}   
console.log(` ${ greet(name)}!`);


