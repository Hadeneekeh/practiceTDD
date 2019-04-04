const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

describe ('Add two numbers', () => {
it('Checks if two numbers are added', () => {
    let num1 = 2;
    let num2 = 3;

    expect(num1 + num2).to.equal(5);
});

});