const { test, expect } = require('@jest/globals');

// Using a mock function

function forEach(items, callback) {
    for (let i = 0; i < items.length; ++i) {
        callback(items[i]);
    }
}

const mockCallback = jest.fn(x => x + 42);
forEach([0, 1], mockCallback);

// The mock function is called twice
test('length of mockfunction is 2', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
})

test('The first argument of the first call to the function was 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
})

test('The first argument of the second call to the function was 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
})

test('The return value of the first call to the function was 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
})

test('The return value of the second call to the function was 43', () => {
    expect(mockCallback.mock.results[1].value).toBe(43);
})