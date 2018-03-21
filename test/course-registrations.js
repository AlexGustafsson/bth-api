const test = require('ava').test;

const {
  fetchCourseRegistrations
} = require('../lib/course-registrations');

test('Can fetch course registrations', async t => {
  const courseRegistrations = await fetchCourseRegistrations(process.env['BTH_AUTH_KEY']);

  t.true(typeof courseRegistrations === 'object');
});
