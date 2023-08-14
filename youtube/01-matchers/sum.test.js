const sum = require('./01-matchers/sum');

/*
*   to be: string, number, boolean
*   to equal: object, array 
*/

// one test
test('sumar 1 + 2 es igual a 3', () => {
    const result = sum(1,2);
    expect(result).toBe(3);
});

// group test & matchers
describe("", () => {
    it('sumar 1 + 2 es igual a 3', () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    });

    it("object assignment", () => {
        const obj = {};
        expect(obj).toEqual({});
    })
})

// null, "" are false
describe("truthy or falsy", () => {
    it("null", () => {
        const n = null;
        // expect(n).toBeTruthy();
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        // expect(n).toBeUndefined();
    })
})

describe("numbers", () => {
    it("two + two", () => {
        const value = 2 + 2;
        expect(value).toBe(4);
        expect(value).toEqual(4);

        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(4);

        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    });

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        //relative closely
        expect(value).toBeCloseTo(0.2999999999999);
    })
});

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/gi);
    })
});

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ];

    it("testing arrays", () => {
        expect(shoppingLists).toContain('milk');
    })
});


function compileAndroidCode() {
    throw new Error("you're using the wrong JDK");
}

describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect( () => compileAndroidCode()).toThrow(Error);
        expect( () => compileAndroidCode()).toThrow("you're using the wrong JDK");
    })
})

// async section - testing synchronous function