const test = require('ava').test;

const {
  fetchCourseRegistrations
} = require('../lib/course-registrations');

test('Can fetch course registrations', async t => {
  const courseRegistrations = await fetchCourseRegistrations();

  t.true(typeof courseRegistrations === 'object');
});
