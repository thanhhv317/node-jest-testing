const { test, expect } = require('@jest/globals');

jest.mock('../request');

import * as user from '../user';

// Testing promise can be done using `.resolves`.
it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
})