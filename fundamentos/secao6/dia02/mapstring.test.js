const { mapString , encode , decode } = require('./mapstring');

describe('Encode function', () => {
    it('Tests if encode is a function', () => {
        expect(typeof encode).toMatch('function')
    }),
    it('Tests if encode(aeiou) returns 12345', () => {
        expect(encode('aeiou')).toMatch('12345')
    }),
    it('Tests if the remain letters arent converted', () => {
        expect(encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz')
    }),
    it('Tests if both strings have the same lenght', () => {
        expect(encode('I have a bad feeling about this').length).toBe(('I have a bad feeling about this').length)
    })
})

describe('Decode function', () => {
    it('Tests if decode is a function', () => {
        expect(typeof decode).toMatch('function')
    }),
    it('Tests if decode(12345) returns aeiou', () => {
        expect(decode('12345')).toMatch('aeiou')
    }),
    it('Tests if decode(67890) returns 67890', () => {
        expect(decode('67890')).toMatch('67890')
    }),
    it('Tests if both strings have the same lenght', () => {
        expect(decode('3 h1v2 1 b1d f22l3ng 1b45t th3s').length).toBe(('3 h1v2 1 b1d f22l3ng 1b45t th3s').length)
    })
})

