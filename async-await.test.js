const { test, expect } = require('@jest/globals');

/** 
 * Alternatively, you can use async and await in your tests. To write an async test, use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with:
 */

fetchData = () => Promise.resolve('peanut butter');

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
})


fetchData2 = () => Promise.reject('error');

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData2()
    } catch (error) {
        expect(error).toMatch('error');
    }
})

//You can combine async and await with .resolves or .rejects.

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', async () => {
    await expect(fetchData2()).rejects.toMatch('error');
})