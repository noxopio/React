import { heroes ,owner} from "../data/heroes";

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2)); // {id: 2, name: "Spiderman", owner: "Marvel"}

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner("Marvel")); // (3) [{…}, {…}, {…}]
export {
    getHeroeById,getHeroesByOwner
}