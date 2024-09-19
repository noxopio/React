import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => {



    test('debe de retonar un string y un numero ', () => {

        const [letter , numbers] = retornaArreglo(); //['ABC', 123]
        
        expect(letter).toBe('ABC');
        expect(typeof letter).toBe('string');
        expect(numbers).toBe(123);

    })

})










