const test = require('ava').test;

const {
  fetchCoursePlans
} = require('../lib/course-plans');

test('Can fetch course plans', async t => {
  const coursePlans = await fetchCoursePlans('MA1444');

  const isArray = Array.isArray(coursePlans);
  t.true(isArray);
  if (isArray) {
    if (coursePlans.length > 0) {
      const item = coursePlans[0];
      const isObject = typeof item === 'object';
      if (isObject) {
        t.true(typeof item.revision === 'string');
        t.true(typeof item.created === 'string');
      }
    }
  }
});
