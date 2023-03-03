const myRemove = require('./script');

describe('Testing myRemove function', () => {
    it('Tests if myRemove([1, 2, 3, 4], 3) returns the expected array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it('Tests if myRemove([1, 2, 3, 4], 3) doesnt return [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it('Tests if myRemove([1, 2, 3, 4], 5) returns the expected array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})