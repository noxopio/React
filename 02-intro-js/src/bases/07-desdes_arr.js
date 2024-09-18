const personajes = ['Goku', 'vegeta', 'Truks']
const [, , p3] = personajes;
console.log(p3);



const retornArreglo = () => (['ABC', 123])

console.log(retornArreglo);
const [letras, numeros] = retornArreglo();
console.log(letras, numeros);
//
const usesSate = (valor) => {

    return [valor, () => { console.log('backFuture') }];
}

const arr= usesSate('goku');
console.log(arr);

arr[1]();

const [nombre,setValor]=usesSate('Goku')

console.log(nombre);
setValor();

