const test = require('ava').test;

const {
  fetchCoursePlan
} = require('../lib/course-plan');

test('Can fetch course plan', async t => {
  const coursePlans = await fetchCoursePlan('MA1444', '11', true);

  t.true(typeof coursePlans === 'string');
});
