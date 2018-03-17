const test = require('ava').test;

const {
  fetchCourseBooks
} = require('../lib/course-books');

test('Can fetch course books', async t => {
  const courseBooks = await fetchCourseBooks('MA1444');

  const isArray = Array.isArray(courseBooks);
  t.true(isArray);
  if (isArray) {
    if (courseBooks.length > 0) {
      const item = courseBooks[0];
      t.true(typeof item === 'string');
    }
  }
});
