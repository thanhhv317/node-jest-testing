# node-jest-testing

Install Jest using yarn:

`yarn add --dev jest`

Or npm:

`npm install --save-dev jest`

see more documentation in here: https://jestjs.io/docs/getting-started

The simplest way to test a value is with exact equality.

```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```