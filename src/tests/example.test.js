const positiveNumber = require('./functions')

describe("Tarea moral", () => {
    test("true si es mayor a 0", () => {
        let value = 2;

        const result = positiveNumber(value)

        expect(result).toBe(true)
    })
    test("false si es menor a 0", () => {
        let value = -2;

        const result = positiveNumber(value)

        expect(result).toBe(false)
    })
    test("true si es 100", () => {
        let value = 100;

        const result = positiveNumber(value)

        expect(result).toEqual(true)
    })

})



