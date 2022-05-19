const { test, expect } = require('@jest/globals');

// resolve
fetchData = () => {
    return Promise.resolve('peanut butter')
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});


test('the data is peanut butter 2', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

// reject
fetchData2 = () => {
    return Promise.reject('error');
}

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData2().catch(e => expect(e).toMatch('error'));
})

test('the fetch fails with an error', () => {
    return expect(fetchData2()).rejects.toMatch('error');
});