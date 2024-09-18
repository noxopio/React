
import { getHeroeById, getHeroesByOwner } from "./bases/08-import-export"


// const promesa = new Promise((resolve,reject )=>{

//     setTimeout(()=>{
// const heroe = getHeroeById(3);
// const heroes = getHeroesByOwner('DC');
// // console.log(heroe);
// // console.log(heroes);
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');

//     },2000)


// })

// promesa.then((heroe)=>{
//     console.log('Then de la promesa', heroe);

// }).catch(err=>console.warn(err))

const getHeroeByIdAsync = (id) => {



    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            const heroes = getHeroesByOwner('DC');
            // console.log(heroe);
            // console.log(heroes);

          (!heroe) ?reject('No se pudo encontrar el heroe'):resolve(heroe);
            

        }, 2000)


    })



};
getHeroeByIdAsync(4).then(console.log).
    catch(console.warn)
