const test = require('ava').test;

const {
  fetchExamRegistrations
} = require('../lib/exam-registrations');

test('Can fetch exam registrations', async t => {
  const examRegistrations = await fetchExamRegistrations(process.env['BTH_AUTH_KEY']);

  t.true(typeof examRegistrations === 'object');
});
