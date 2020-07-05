var chai = require('chai'); //libreria
var assert = chai.assert;   //funcion
var should = chai.should(); //funcion
var expect = chai.expect;  //funcion
var calculator = require('../calculator'); //importamos para poder usarlo en el test

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
         result.should.be.equal(2);//se coloca el resultado a encontrar
      })
    })
  })

//FUNCION EXPECT (BDD)
describe('Testing expect function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : expect(result).to.be.a(value);: ', function() {
         result = calculator.addTest(1,1);
          expect(result).to.equal(3);//provocamos u error esperando un valor que no es el correcto
      })
    })
  })