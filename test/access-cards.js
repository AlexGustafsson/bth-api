const test = require('ava').test;

const {
  fetchAccessCards
} = require('../lib/access-cards');

test('Can fetch access cards', async t => {
  const accessCards = await fetchAccessCards(process.env['BTH_AUTH_KEY']);

  t.true(typeof accessCards === 'object');
});
