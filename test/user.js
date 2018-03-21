const test = require('ava').test;

const {
  fetchUserInfo
} = require('../lib/user');

test('Can fetch user info', async t => {
  const userInfo = await fetchUserInfo(process.env['BTH_AUTH_KEY']);

  t.true(typeof userInfo === 'object');
});
