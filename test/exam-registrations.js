const test = require('ava').test;

const {
  fetchExamRegistrations
} = require('../lib/exam-registrations');

test('Can fetch exam registrations', async t => {
  const examRegistrations = await fetchExamRegistrations();

  t.true(typeof examRegistrations === 'object');
});
