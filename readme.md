Mocha: Es un framework de pruebas. Permite ejecutar las pruebas en Node y en el navegador. Permite la generación de reportes acerca del resultado de la ejecución.

Chai: Es una libreria que nos permite realizar aserciones con el fin de validar el resultado de nuestros tests. Ofrece diferentes formas de escribir las aserciones permitiendo que sean faciles de leer. Las formas son: expect,should y assert.

npm i mocha.
npm i chai

Para importar su funcionalidad: 
var assert = require('chai').assert; -> se enfoca mas en el estilo para Tdd 
var expect = require('chai').expect; -> se enfoca mas en el estilo para Bdd 
var should = require('chai').should();-> se enfoca mas en el estilo para Bdd

Funcion a testear: Creamos un nuevo archivo llamado calculator.js y agregamos la siguiente funcion:

exports.addTest = function(value1, value2) {
    return  value1 + value2;
}

Creamos un folder llamado test y dentro creamos calculator.tests.js:

//FUNCION ASSERT(TDD)
describe('Testing assert function: ', function() {
  describe('Check addTest Function', function(){
    it('Check the returned value using : assert.equal(value, value): ', function() {
       result = calculator.addTest(1,1);
       assert.equal(result, 2);
    });
  });
})

//FUNCION SHOULD(BDD)
describe('Testing should function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : result.should.be.equal(value): ', function() {
         result = calculator.addTest(1,1);
         result.should.be.equal(2);
      })
    })
  })

//FUNCION EXPECT (BDD)
describe('Testing expect function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : expect(result).to.be.a(value);: ', function() {
         result = calculator.addTest(1,1);
          expect(result).to.equal(3);
      })
    })
  })
  
Ahora vamos a crear el comando que nos permitira ejecutar los tests. Vamos al package.json:

"test": "./node_modules/.bin/mocha --reporter spec"

POSIBLES ERRORES: ReferenceError: describe is not defined

Si se llega a obtener el siguiente error es porque se intenta correr funciones de mocha y o no se tiene instalado de forma global o no se hace referencia a dicha libreria dentro del node modules. "./node_modules/.bin/mocha