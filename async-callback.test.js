const { test, expect } = require('@jest/globals');

fetchData = (cb) => {
    cb('peanut butter')
}

test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});