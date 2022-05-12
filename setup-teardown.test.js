/**
 * For example, let's say that several tests interact with a database of cities. 
 * You have a method initializeCityDatabase() that must be called before each of these tests,
 *  and a method clearCityDatabase() that must be called after each of these tests. You can do this with:
 */

const { test, expect } = require('@jest/globals');


let cities = [
    'HCM'
];

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