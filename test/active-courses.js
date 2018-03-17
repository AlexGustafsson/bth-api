const test = require('ava').test;

const {
  fetchActiveCourses
} = require('../lib/active-courses');

test('Can fetch active courses', async t => {
  const activeCourses = await fetchActiveCourses();

  t.true(typeof activeCourses === 'object');
});
