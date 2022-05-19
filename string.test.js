const { test, expect } = require('@jest/globals');

// You can check strings against regular expressions with toMatch:

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/g);
})

test('but there is a "stop" om Cristoph', () => {
    expect("Christoph").toMatch(/stop/g);

})