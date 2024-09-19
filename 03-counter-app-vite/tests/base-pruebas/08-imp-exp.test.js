import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas de 08-impo-exp', () => {


    test('getHeroesByid debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })
    test('getHeroesByid debe retornar UNDEFINED si no existe el ID', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        // expect(heroe).toEqual({id:1,name:'Batman',owner:'DC'})
        expect(heroe).toBeUndefined();

    })

    test('geroesByOwner debe retornar un arreglo con los heroes de Dc ', () => {



        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toEqual(3)



    })
    test('geroesByOwner debe retornar un arreglo con los heroes de Marvel ', () => {



        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toEqual(2)



    })









})