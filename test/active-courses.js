const test = require('ava').test;

const {
  fetchActiveCourses
} = require('../lib/active-courses');

test('Can fetch active courses', async t => {
  const activeCourses = await fetchActiveCourses(process.env['BTH_AUTH_KEY']);

  t.true(typeof activeCourses === 'object');
});
