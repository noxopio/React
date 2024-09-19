
describe('Pruebas en el archivo demo.test.js',()=>{

    test('deben ser iguales los string',()=>{

        //1. inicializacion
        const mensaje = 'hola mundo';
    
        //2. estimulo
        const mensaje2 = `hola mundo`;
    
        //3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
    test('Esta ',()=>{
    
    const message1='hola mundo';
    const message2 = message1.trim(); 
    
    
    // expect (message1).toBe(message2); 
    expect (message1).toBe('hola mundo');
    
    }); 

})

