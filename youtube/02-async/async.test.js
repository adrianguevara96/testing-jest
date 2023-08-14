const fetchData = require('./async');

describe("", () => {
    it("should return correct ToDo", async () => {
        const todo = fetchData(1).then(todo => {
            expect(todo.id).toBe(1);
        });

        const todo2 = await fetchData(1);
        expect(todo2.id).toBe(1);
    })
})

// if we can run just one test, we can use "npm run test [test name]"
// npm run test async