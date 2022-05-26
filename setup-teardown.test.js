/**
 * For example, let's say that several tests interact with a database of cities. 
 * You have a method initializeCityDatabase() that must be called before each of these tests,
 *  and a method clearCityDatabase() that must be called after each of these tests. You can do this with:
 */

const { test, expect } = require('@jest/globals');


let cities = [
    'HCM',
    'DANANG'
];
// Repeating Setup For Many Tests

initializeCityDatabase = () => {
    cities.push('HUE', 'QT');
}

clearCityDatabase = () => {
    cities = cities.filter((city) => {
        return !['HUE', 'QT'].includes(city);
    })
}

const isCity = (city) => {
    return cities.includes(city);
}

beforeEach(() => {
    initializeCityDatabase();
})

afterEach(() => {
    clearCityDatabase();
})

test('city database has HUE', () => {
    expect(cities).toContain('HUE');
})

test('city database has QT', () => {
    expect(isCity('QT')).toBeTruthy();
})


// one-Time setup

beforeAll(() => {
    // return initializeCityDatabase();
});

afterAll(() => {
    // return clearCityDatabase();
});


// Scoping

/**
 * By default, the beforeAll and afterAll blocks apply to every test in a file. 
 * You can also group tests together using a describe block. When they are inside a describe block,
 *  the beforeAll and afterAll blocks only apply to the tests within that describe block.
 */


beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'));
    afterAll(() => console.log('2 - afterAll'));
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));
    test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll


// GENERAL ADVICE
/**
 * If a test is failing, one of the first things to check should be whether the test is failing when it's the only test that runs. 
 * To run only one test with Jest, temporarily change that test command to a test.only:
 */

test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});