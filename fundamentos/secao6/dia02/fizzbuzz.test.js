const myFizzBuzz = require('./fizzbuzz');

describe('Tests the myFizzBuzz function', () => {[
    it('Tests if myFizzBuzz(15) returns ~fizzbuzz~', () => {
        expect(myFizzBuzz(15)).toMatch('fizzbuzz')
    }),
    it('Tests if myFizzBuzz(9) returns ~fizz~', () => {
        expect(myFizzBuzz(9)).toMatch('fizz')
    }),
    it('Tests if myFizzBuzz(10) returns ~buzz~', () => {
        expect(myFizzBuzz(10)).toMatch('buzz')
    }),
    it('Tests if myFizzBuzz(8) returns 8', () => {
        expect(myFizzBuzz(8)).toBe(8);
    }),
    it('Tests if myFizzBuzz(true) returns false', () => {
        expect(myFizzBuzz(true)).toBeFalsy;
    })
]})