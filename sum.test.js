const { test, expect } = require('@jest/globals');
const { not } = require('expect');
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});