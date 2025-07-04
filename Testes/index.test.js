const fizz_buzz = require('./index')

describe("Fizz_buzz", ()=>{
    test('[3] should result in "fizz"', ()=>{
        expect(fizz_buzz([3]).toBe("fizz"));
    });
});